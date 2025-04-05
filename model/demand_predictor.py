import pandas as pd
from sklearn.linear_model import LinearRegression

# CSV Data Load करो
data = pd.read_csv('../data/sales.csv')

# Features और Labels Define करो
X = data[['price']]   # Price को input feature मान रहे हैं
y = data['sales']     # Sales हमारा target है

# Model Train करो
model = LinearRegression()
model.fit(X, y)

# Prediction करो (मान लो ₹550 price पे)
future_price = [[550]]
predicted_sales = model.predict(future_price)

print(f"₹550 price  expected sales : {predicted_sales[0]:.2f}")
