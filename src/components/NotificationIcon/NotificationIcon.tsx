import { useNavigate } from 'react-router-dom';
import { useCallback, memo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { BellIcon } from '../../icons';
import { clearNotifications } from '../../store/slices/serverSlice';
import type { JSX } from 'react';
import { IconWithBadge } from '../IconWithBadge';

interface NotificationIconProps {
  onClick?: () => void;
}

const NotificationIconComponent = ({
  onClick,
}: NotificationIconProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { hasNew } = useAppSelector(state => state.servers.notifications);

  const handleClick = useCallback(() => {
    if (hasNew) {
      dispatch(clearNotifications());
    }
    navigate('/notifications');
    onClick?.();
  }, [hasNew, dispatch, navigate, onClick]);

  return (
    <IconWithBadge
      onClick={handleClick}
      icon={<BellIcon size={22} color="var(--color-text-secondary)" />}
      showBadge={hasNew}
    />
  );
};

export const NotificationIcon = memo(NotificationIconComponent);
