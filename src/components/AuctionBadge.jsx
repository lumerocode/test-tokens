export const AuctionBadge = ({ status = 'primary', label }) => {
  const styles = {
    primary: 'bg-auction-primary text-white',
    urgent: 'bg-auction-urgent text-white animate-pulse',
    success: 'bg-auction-success text-white',
    neutral: 'bg-auction-neutral text-white',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-bold ${styles[status]}`}>
      {label}
    </span>
  );
};