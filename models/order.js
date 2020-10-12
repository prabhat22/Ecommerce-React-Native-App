

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
  get readableDate()
  {
      return this.date.toLocaleDateString('en-EN',
      {
          year:'numeric',
          month:'long',
          day:'numeric',
          hours:'2-digit',
          minutes:'2-digit'
      })
  }
}

export default Order;
