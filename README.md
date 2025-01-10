
# **Crypto Deviation Calculator**

This project is a backend application that calculates the standard deviation of cryptocurrency prices for specified coins (e.g., Bitcoin, Ethereum). It uses **MongoDB** to store price data fetched periodically from the **CoinGecko API** and provides an API endpoint to retrieve the deviation.

---

## **Features**

1. **Cryptocurrency Price Tracking**  
   Periodically fetches the latest cryptocurrency price data (Bitcoin, Ethereum, etc.) using the CoinGecko API.  

2. **Data Storage**  
   Stores the fetched price data in a MongoDB collection, including details like the coin's price, market cap, 24-hour change, and a timestamp.

3. **Deviation Calculation**  
   Computes the standard deviation of a cryptocurrency's price based on the latest 100 entries in the database.  

4. **API Endpoints**  
   - `/deviation`: Retrieves the standard deviation for a specified coin.

---

## **Tech Stack**

- **Node.js**: Backend server.
- **Express.js**: API routing and request handling.
- **MongoDB**: Database for storing cryptocurrency data.
- **Cron**: Schedules periodic fetching of cryptocurrency data.
- **Axios**: Makes HTTP requests to the CoinGecko API.

---

## **How It Works**

1. **Data Fetching Job**  
   - A cron job runs every 2 hours to fetch cryptocurrency prices for coins specified in the `COINS` array.  
   - Data is fetched from the CoinGecko API and stored in MongoDB.  

2. **Deviation Calculation API**  
   - The `/deviation` endpoint takes a `coin` query parameter and calculates the standard deviation of the price for the last 100 entries.  
   - If no coin is provided or if insufficient data exists, the API returns an error.

---

## **Setup Instructions**

### **1. Clone the Repository**  
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Configure Environment**  
Create a `.env` file with the following details:  
```env
MONGO_URI=<your-mongodb-connection-string>
```

### **4. Start the Application**  
- Run the application:  
```bash
npm start
```
---

## **API Endpoints**

### **1. GET `/deviation`**
**Description**: Calculates the standard deviation of cryptocurrency prices for the specified coin.  
**Query Parameters**:  
- `coin` (required): The name of the cryptocurrency (e.g., bitcoin, ethereum).  

**Example Request**:  
```bash
GET http://localhost:3000/deviation?coin=bitcoin
```

**Possible Responses**:  
- **200 OK**:  
  ```json
  { "deviation": "123.45" }
  ```
- **400 Bad Request**:  
  ```json
  { "error": "Coin is required" }
  ```
- **400 Bad Request**:  
  ```json
  { "error": "Not enough data for calculation" }
  ```

---


## **Planned Enhancements**

1. Add more cryptocurrencies to the `COINS` array.
2. Implement advanced analytics, such as moving averages or price trends.
3. Secure API endpoints with authentication and rate limiting.
4. Add frontend support for visualizing deviation and price trends.

---

