export const generateServerId = (): string => {
  const chars = '0123456789abcdef';
  const sections = [8, 4, 4, 4, 12];

  return sections
    .map(length =>
      Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join('')
    )
    .join('-');
};
