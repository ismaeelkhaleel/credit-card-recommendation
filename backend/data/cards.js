// Credit Card Data (60 cards, multiple categories)
const cards = [
  // ==== FOOD & DINING ====
  { id: 1, cardName: "Swiggy HDFC Credit Card", categories: ["Food", "Shopping"], benefits: "5% cashback on Swiggy, dining, and grocery" },
  { id: 2, cardName: "Zomato Edition Credit Card", categories: ["Food", "Rewards"], benefits: "10% cashback on Zomato and partner restaurants" },
  { id: 3, cardName: "EazyDiner IndusInd Credit Card", categories: ["Food", "Lifestyle"], benefits: "Complimentary meal vouchers and dining discounts" },
  { id: 4, cardName: "HDFC Diners Club Privilege", categories: ["Food", "Travel"], benefits: "Complimentary dining benefits and lounge access" },
  { id: 5, cardName: "RBL Bank Platinum Dining Card", categories: ["Food", "Shopping"], benefits: "Up to 10% cashback on dining bills" },

  // ==== SHOPPING ====
  { id: 6, cardName: "Flipkart Axis Bank Credit Card", categories: ["Shopping", "Cashback"], benefits: "5% cashback on Flipkart, Myntra, and partner merchants" },
  { id: 7, cardName: "Amazon Pay ICICI Credit Card", categories: ["Shopping", "Cashback"], benefits: "5% cashback on Amazon for Prime members" },
  { id: 8, cardName: "Tata Neu Infinity Credit Card", categories: ["Shopping", "Rewards"], benefits: "5% NeuCoins on Tata brands and partner stores" },
  { id: 9, cardName: "SBI SimplyCLICK Credit Card", categories: ["Shopping", "Rewards"], benefits: "10x rewards on online spends at partner stores" },
  { id: 10, cardName: "HDFC Millennia Credit Card", categories: ["Shopping", "Travel", "Cashback"], benefits: "5% cashback on online spends and wallet recharges" },

  // ==== TRAVEL ====
  { id: 11, cardName: "Axis Bank Atlas Credit Card", categories: ["Travel", "Lifestyle"], benefits: "Earn miles on every spend, complimentary lounge access" },
  { id: 12, cardName: "Air India SBI Signature Credit Card", categories: ["Travel", "Rewards"], benefits: "15,000 reward points as welcome bonus, priority boarding" },
  { id: 13, cardName: "HDFC Diners Club Privilege", categories: ["Travel", "Food"], benefits: "Complimentary airport lounge access and global privileges" },
  { id: 14, cardName: "Yatra SBI Credit Card", categories: ["Travel", "Cashback"], benefits: "Discounts on flight and hotel bookings at Yatra.com" },
  { id: 15, cardName: "MakeMyTrip ICICI Platinum Card", categories: ["Travel", "Shopping"], benefits: "Special offers on MakeMyTrip flight and hotel bookings" },

  // ==== CASHBACK ====
  { id: 16, cardName: "HDFC MoneyBack Credit Card", categories: ["Cashback", "Shopping"], benefits: "2 reward points for every ₹150 spent" },
  { id: 17, cardName: "SBI Card PRIME", categories: ["Cashback", "Lifestyle"], benefits: "Reward points on fuel, dining, and groceries" },
  { id: 18, cardName: "HSBC Cashback Credit Card", categories: ["Cashback", "Shopping"], benefits: "1.5% cashback on all online spends" },
  { id: 19, cardName: "Axis Ace Credit Card", categories: ["Cashback", "Travel"], benefits: "5% cashback on bill payments via Google Pay" },
  { id: 20, cardName: "IndusInd Legend Credit Card", categories: ["Cashback", "Rewards"], benefits: "1.5% cashback on all domestic and international spends" },

  // ==== FUEL ====
  { id: 21, cardName: "BPCL SBI Card", categories: ["Fuel", "Cashback"], benefits: "4.25% value back on BPCL fuel spends" },
  { id: 22, cardName: "IndianOil Citi Credit Card", categories: ["Fuel", "Rewards"], benefits: "Up to 4% fuel surcharge waiver" },
  { id: 23, cardName: "HDFC Bharat Cashback Card", categories: ["Fuel", "Shopping"], benefits: "5% cashback on fuel and grocery spends" },
  { id: 24, cardName: "Standard Chartered Super Value Titanium Card", categories: ["Fuel", "Food"], benefits: "5% cashback on fuel, telecom, and utilities" },
  { id: 25, cardName: "Axis Bank MY Zone Card", categories: ["Fuel", "Shopping"], benefits: "4% cashback on movie and fuel spends" },

  // ==== LIFESTYLE ====
  { id: 26, cardName: "HDFC Regalia Credit Card", categories: ["Lifestyle", "Travel"], benefits: "Airport lounge access and premium benefits" },
  { id: 27, cardName: "ICICI Coral Credit Card", categories: ["Lifestyle", "Shopping"], benefits: "Movie offers and dining discounts" },
  { id: 28, cardName: "YES Prosperity Edge Card", categories: ["Lifestyle", "Cashback"], benefits: "Reward points on every spend and lifestyle offers" },
  { id: 29, cardName: "RBL World Safari Credit Card", categories: ["Lifestyle", "Travel"], benefits: "Zero forex markup and travel rewards" },
  { id: 30, cardName: "Kotak Royale Signature Credit Card", categories: ["Lifestyle", "Rewards"], benefits: "Reward points on all categories" },

  // ==== REWARDS ====
  { id: 31, cardName: "Axis Bank Privilege Credit Card", categories: ["Rewards", "Travel"], benefits: "Earn EDGE reward points on all spends" },
  { id: 32, cardName: "SBI Card ELITE", categories: ["Rewards", "Lifestyle"], benefits: "Complimentary movie tickets and lounge access" },
  { id: 33, cardName: "HDFC Diners Club Black", categories: ["Rewards", "Travel"], benefits: "5x reward points on international spends" },
  { id: 34, cardName: "ICICI Emeralde Credit Card", categories: ["Rewards", "Lifestyle"], benefits: "Unlimited airport lounge access and concierge service" },
  { id: 35, cardName: "HSBC Visa Platinum Card", categories: ["Rewards", "Cashback"], benefits: "Introductory bonus reward points and fuel surcharge waiver" },

  // ==== ENTERTAINMENT ====
  { id: 36, cardName: "PVR Kotak Platinum Credit Card", categories: ["Entertainment", "Lifestyle"], benefits: "Free PVR movie tickets every month" },
  { id: 37, cardName: "Axis Bank Neo Credit Card", categories: ["Entertainment", "Shopping"], benefits: "Discounts on movie and online streaming" },
  { id: 38, cardName: "BookMyShow RBL Bank Credit Card", categories: ["Entertainment", "Cashback"], benefits: "Free movie tickets and dining offers" },
  { id: 39, cardName: "HDFC Titanium Times Card", categories: ["Entertainment", "Food"], benefits: "25% off on movie tickets and dining" },
  { id: 40, cardName: "SBI Card PRIME", categories: ["Entertainment", "Rewards"], benefits: "Reward points and free movie tickets" },

  // ==== BUSINESS / PREMIUM ====
  { id: 41, cardName: "HDFC Business MoneyBack Credit Card", categories: ["Business", "Cashback"], benefits: "Cashback and reward points on business expenses" },
  { id: 42, cardName: "ICICI Business Advantage Card", categories: ["Business", "Rewards"], benefits: "Fuel savings and cashback on business payments" },
  { id: 43, cardName: "Axis Bank Vistara Infinite Credit Card", categories: ["Business", "Travel"], benefits: "Complimentary flight ticket and upgrade vouchers" },
  { id: 44, cardName: "IndusInd Pinnacle Credit Card", categories: ["Business", "Lifestyle"], benefits: "Reward points and concierge service" },
  { id: 45, cardName: "SBI Corporate Platinum Credit Card", categories: ["Business", "Rewards"], benefits: "Corporate benefits and reward points" },

  // ==== STUDENT / ENTRY LEVEL ====
  { id: 46, cardName: "ICICI Instant Platinum Credit Card", categories: ["Student", "Shopping"], benefits: "No annual fee, cashback on spends" },
  { id: 47, cardName: "SBI Unnati Credit Card", categories: ["Student", "Cashback"], benefits: "Lifetime free, cashback on all purchases" },
  { id: 48, cardName: "HDFC MoneyBack+ Card", categories: ["Student", "Shopping"], benefits: "Cashback on online purchases and bill payments" },
  { id: 49, cardName: "Axis MY Zone Easy Card", categories: ["Student", "Entertainment"], benefits: "Discounts on movies and online streaming" },
  { id: 50, cardName: "Kotak 811 Credit Card", categories: ["Student", "Cashback"], benefits: "5% cashback on online transactions" },

  // ==== TRAVEL & AIRLINES ====
  { id: 51, cardName: "Vistara SBI Card", categories: ["Travel", "Rewards"], benefits: "Free flight tickets and upgrade vouchers" },
  { id: 52, cardName: "Air Vistara Axis Bank Credit Card", categories: ["Travel", "Lifestyle"], benefits: "Exclusive flight privileges" },
  { id: 53, cardName: "IRCTC SBI Platinum Credit Card", categories: ["Travel", "Cashback"], benefits: "Railway ticket booking discounts and points" },
  { id: 54, cardName: "Etihad Guest SBI Card", categories: ["Travel", "Rewards"], benefits: "Bonus miles and Etihad privileges" },
  { id: 55, cardName: "HDFC JetPrivilege Diners Club Card", categories: ["Travel", "Lifestyle"], benefits: "Free air miles and travel vouchers" },

  // ==== EXTRA CARDS ====
  { id: 56, cardName: "Union Bank Signature Credit Card", categories: ["Lifestyle", "Rewards"], benefits: "Reward points on every spend" },
  { id: 57, cardName: "PNB Global Platinum Card", categories: ["Cashback", "Fuel"], benefits: "Cashback and fuel surcharge waiver" },
  { id: 58, cardName: "Canara Bank Visa Classic Card", categories: ["Shopping", "Rewards"], benefits: "Reward points on all retail purchases" },
  { id: 59, cardName: "IDFC First Select Credit Card", categories: ["Rewards", "Lifestyle"], benefits: "Reward points and low interest rate" },
  { id: 60, cardName: "Federal Bank Signet Credit Card", categories: ["Shopping", "Cashback"], benefits: "5% cashback on e-commerce spends" }
];

module.exports = cards;
