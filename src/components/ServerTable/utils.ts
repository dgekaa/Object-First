import { Z_INDEX } from '../../styles';
import { AlertType } from '../../types/server';

export const getStatusColor = (status: string): string => {
  return status === 'Running' ? 'var(--color-green)' : 'var(--color-red)';
};

export const getAlertColor = (type: AlertType): string => {
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

  return String(a).localeCompare(String(b)) * sortDirection;
};

const applyStyles = (
  element: HTMLElement,
  styles: Record<string, string>
): void => {
  Object.assign(element.style, styles);
};

export const fallbackCopyNotification = (text: string): void => {
  const existingNotification = document.getElementById(
    'fallback-copy-notification'
  );
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.id = 'fallback-copy-notification';

  applyStyles(notification, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: '8px',
    padding: '16px 20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    zIndex: Z_INDEX.MODAL_HIGH.toString(),
    fontFamily: 'inherit',
    fontSize: '14px',
    color: 'var(--color-text-primary)',
    maxWidth: '400px',
    wordBreak: 'break-all',
  });

  const titleEl = document.createElement('div');
  applyStyles(titleEl, {
    marginBottom: '8px',
    fontWeight: '600',
  });
  titleEl.textContent = 'Please copy manually:';

  const contentEl = document.createElement('div');
  applyStyles(contentEl, {
    background: 'var(--color-background-subtle)',
    padding: '8px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    userSelect: 'text',
    cursor: 'text',
  });
  contentEl.textContent = text;

  contentEl.addEventListener('click', e => {
    e.stopPropagation();
  });

  const closeButtonEl = document.createElement('button');
  applyStyles(closeButtonEl, {
    marginTop: '12px',
    padding: '6px 12px',
    backgroundColor: 'var(--color-border-subtle)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'block',
    marginLeft: 'auto',
  });
  closeButtonEl.textContent = 'Close';

  const instructionEl = document.createElement('div');
  applyStyles(instructionEl, {
    marginTop: '8px',
    fontSize: '12px',
    color: 'var(--color-text-secondary)',
  });
  instructionEl.textContent = 'Select text to copy';

  notification.appendChild(titleEl);
  notification.appendChild(contentEl);
  notification.appendChild(instructionEl);
  notification.appendChild(closeButtonEl);

  document.body.appendChild(notification);

  const removeNotification = (): void => {
    notification.removeEventListener('click', removeNotification);
    closeButtonEl.removeEventListener('click', removeNotification);
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  };

  closeButtonEl.addEventListener('click', removeNotification);
  notification.addEventListener('click', removeNotification);

  setTimeout(removeNotification, 5000);
};
