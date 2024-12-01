# **Country Info Viewer**

This application provides information about countries, including their name, borders, population over time, and flag. It uses a **React.js frontend** and a **Node.js backend**, running in **Docker containers**.

---

## **Features**

- **Country List Page:**
  - Displays a list of all available countries.
  - Each country links to a detailed information page.
  
- **Country Info Page:**
  - Shows detailed information about the selected country, including:
    - Country name and flag.
    - List of bordering countries (clickable to navigate to their respective info pages).
    - A population chart displaying population data over time.

---

## **Routes**

### **Backend API Endpoints**

1. **`GET /countries/available`**
   - Returns a list of all available countries:
     ```json
     [
       { "countryCode": "AL", "name": "Albania" },
       { "countryCode": "GR", "name": "Greece" }
     ]
     ```

2. **`GET /countries/:id`**
   - Returns detailed information about a specific country:
     ```json
     {
       "borders": [
         {
           "commonName": "Montenegro",
           "officialName": "Montenegro",
           "countryCode": "ME",
           "region": "Europe",
           "borders": null
         }
       ],
       "populationData": {
         "country": "Albania",
         "code": "ALB",
         "iso3": "ALB",
         "populationCounts": [
           { "year": 1960, "value": 1608800 }
         ]
       },
       "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"
     }
     ```

---

## **Tech Stacks**

- **Frontend:** React.js with Tailwind CSS for styling.
- **Backend:** Node.js with and NestJS.

---

## **Setup Instructions**

### **Prerequisites**

- Docker and Docker Compose must be installed on your system.

### **Steps to Run the App**

1. Clone the repository:
   ```bash
   git clone git@github.com:igorrCarvalho/developsToday-assestment.git
   cd developsToday-assestment

2. Run docker containers:
   ```bash
   docker-compose up --build

- To remove docker containers:
   ```bash
   docker-compose down
