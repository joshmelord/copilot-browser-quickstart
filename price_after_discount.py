def price_after_discount(price: float, pct: float, tax: float) -> float:
    discount = price * (pct / 100.0)
    after_discount = price - discount
    total = after_discount + (after_discount * tax)
    return round(total, 2)
