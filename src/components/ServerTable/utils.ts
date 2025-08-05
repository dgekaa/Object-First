import { Z_INDEX } from '../../styles';

export const getStatusColor = (status: string): string => {
  return status === 'Running' ? 'var(--color-green)' : 'var(--color-red)';
};

export const getAlertColor = (type: string): string => {
  switch (type) {
    case 'Critical':
      return 'var(--color-red)';
    case 'Important':
      return 'var(--color-orange)';
    case 'Moderate':
      return 'var(--color-yellow)';
    case 'All good':
      return 'var(--color-green)';
    default:
      return 'var(--color-text-secondary)';
  }
};

type AlertType = 'Critical' | 'Important' | 'Moderate' | 'All good';

export const compareValues = <T>(
  a: T,
  b: T,
  direction: 'asc' | 'desc'
): number => {
  if (a === null || a === undefined) return direction === 'asc' ? -1 : 1;
  if (b === null || b === undefined) return direction === 'asc' ? 1 : -1;
  if (a === b) return 0;

  const sortDirection = direction === 'asc' ? 1 : -1;

  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b) * sortDirection;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return (a - b) * sortDirection;
  }

  if (
    typeof a === 'object' &&
    typeof b === 'object' &&
    a !== null &&
    b !== null &&
    'type' in a &&
    'type' in b &&
    'count' in a &&
    'count' in b
  ) {
    const alertTypeOrder: Record<AlertType, number> = {
      Critical: 0,
      Important: 1,
      Moderate: 2,
      'All good': 3,
    };

    const aType = a.type;
    const bType = b.type;

    if (
      typeof aType === 'string' &&
      typeof bType === 'string' &&
      aType in alertTypeOrder &&
      bType in alertTypeOrder
    ) {
      const isValidAlertType = (type: string): type is AlertType =>
        type === 'Critical' ||
        type === 'Important' ||
        type === 'Moderate' ||
        type === 'All good';

      if (isValidAlertType(aType) && isValidAlertType(bType)) {
        const aTypeValue = alertTypeOrder[aType];
        const bTypeValue = alertTypeOrder[bType];

        if (aType !== bType) {
          return (aTypeValue - bTypeValue) * sortDirection;
        }
      }
    }

    const aCount = Number(a.count);
    const bCount = Number(b.count);

    if (!isNaN(aCount) && !isNaN(bCount)) {
      return (aCount - bCount) * sortDirection;
    }

    return String(a).localeCompare(String(b)) * sortDirection;
  }

  return String(a).localeCompare(String(b)) * sortDirection;
};

export const formatCpuUsage = (percent: number): string =>
  `${percent.toFixed(2)} CPU`;

export const fallbackCopyNotification = (text: string): void => {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-surface);
    border: 1px solid var(--color-border-subtle);
    border-radius: 8px;
    padding: 16px 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index: ${Z_INDEX.MODAL_HIGH};
    font-family: inherit;
    font-size: 14px;
    color: var(--color-text-primary);
    max-width: 400px;
    word-break: break-all;
  `;

  notification.innerHTML = `
    <div style="margin-bottom: 8px; font-weight: 600;">Please copy manually:</div>
    <div style="background: var(--color-background-subtle); padding: 8px; border-radius: 4px; font-family: monospace;">${text}</div>
    <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">Click anywhere to close</div>
  `;

  document.body.appendChild(notification);

  const removeNotification = (): void => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  };

  notification.addEventListener('click', removeNotification);
  setTimeout(removeNotification, 2000);
};
