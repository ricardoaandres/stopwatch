import creditCardChip from './credit-card-chip.png';

const CreditCard = () => {
  return (
    <div className='credit-card'>
      <div className='credit-card-bank-background'>fluid</div>
      <div className='credit-card-bank'>fluid</div>
      <div className='credit-card-number credit-card-text'>1234 5678 9012 3456</div>

      <div className='credit-card-chip'><img src={creditCardChip  } alt='' /></div>

      <div className='credit-card-labels'>

      </div>

      <div className='credit-card-valid-from credit-card-text'>12/20</div>
      <div className='credit-card-valid-thru credit-card-text'>12/25</div>
      <div className='credit-card-holder credit-card-text'>Lee M. Cardholder</div>

      <div className='credit-card-mastercard'>
        <div className='credit-card-left-circle'></div>
        <div className='credit-card-right-circle'></div>
      </div>
    </div>
  );
};

export default CreditCard;
