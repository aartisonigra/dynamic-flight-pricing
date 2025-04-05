def adjust_price(demand):
    if demand > 110:
        return "Price बढ़ाओ 10%"
    elif demand < 95:
        return "Price घटाओ 10%"
    else:
        return "Price same रखो"

# Example
predicted_demand = 105
decision = adjust_price(predicted_demand)
print(f"Predicted Demand: {predicted_demand} → {decision}")
