export default function Order() {
  return (
    <section className="container mx-auto flex flex-col gap-4 my-10">
      <h1 className="titr text-ghaleb-lime">How To Order?</h1>
      <ul>
        <li className="li">Sign in (or create an account) and set your delivery address.</li>
        <li className="li">Choose the restaurant you want to order from.</li>
        <li className="li">Select your items and tap “Add to Cart”.</li>
        <li className="li">To place your order, select “View cart” or “Checkout”.</li>
        <li className="li">Review your order and tap “Place Order”...</li>
        <li className="li">Track your order progress.</li>
      </ul>
    </section>
  );
}
