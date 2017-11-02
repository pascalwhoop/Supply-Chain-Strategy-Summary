# Supply Chain Strategy summary

> University of Cologne winter semester 2017/18<br/>
> Pascal Brokmeier & Christian Hovestadt

## Information

To create this summary there are a few helpers to make work easier:

- running `npm install && npm start` will watch the desktop for new `.png` files and automatically copy them to the images folder.
    - new images will be numbered from 1,2,3,4,... all ending with the `.png` file type
- to build a pdf from the markdown one may use `npm run build-pdf`
    - please advise: `pandoc` as well as `latex` need to be installed on the system and available in the PATH env variable
- to build a html website from the markdown one may use `npm build`

To install pandoc and latex on Linux one may use:
`sudo apt install pandoc texlive-latex-base`
To use math, just use the normal latex notation.

`\\( f(x) = 2x \\)` for inline \\( f(x) = 2x \\)

and for block size math
```
$$ f(x) = sin(x) $$
```

$$ f(x) = sin(x) $$

## Contents

## Chapter 1:
## Chapter 2:
## Chapter 3:
## Chapter 4:
## Chapter 5 & 6: Simulation
## Chapter 7: Capacity Strategy

The topic of this chapter is the process of deciding the long term requirements for capacity sizes as well as time and location. While the scope is "long term", the decision process for the size is very similar to that of the newsvendor problem. One has to evaluate both the costs that one incurrs in the case of an investment into new capacity and the expected benefits (income) one might get in return. This is abstracted by an expected demand distribution. The timing tradeoff is that of additional demand distribution information (i.e. a smaller standard deviation) vs. the risk of lost sales opportunities while waiting. The location tradeoff is that of costs versus a service level fulfillment ability. The closer the manufacturing is, the easier it is to fulfill all demand, achieving a high service level.

**Key determinants of capacity strategy include:**

-	Demand Growth Curve
-	Demand Growth Curve
-	Uncertainty
-	Scale Economies (Capacity & Production)
-	Time Value of Money
-	Learning Curves
-	Technology Roadmaps
-	Access to Capital
-	Supply Base
-	Customer Stickiness
-	Competitor Actions

![](images/2.png)

-   **Bottleneck**: slowest process in system
-   **Throughput**: Number of items that leave system per time University
-   **Capacity**: max throughput of system

### Forecasts

**Principle 1:** Always include in forecast derivation process

-   Demand
-   Supply
-   Technology
    -   new Technology
    -   Learning & Improvements
-   cost of capacity
-   Strategic Uncertainty

**Principle 2:** Always include uncertainty by time bucket

1. One number forecast: Simple, inexpensive, low-detail
2. Multiple scenario forecast: allows for wider range of cases
3. Full distribution: complex forecasting, best prediction capability

**Consensus based forecasting** is the idea of asking several specialists for their opinion and let them come up with a number that everyone can agree on. This is dangerous, as it allows for human dynamics to nudge the number to something that does not resemble the actual statistical average of all individual estimates. Hence, it looses detail and information value.

### Flexibility Categories

1. **Mix Flexibility**: Classic example is a 3D Printer. The ability to create several types of products / services with the same invest. Another example in the service environment would be a general consultant. The opposite would be someone highly specialised.
2. **Volume Flexibility**: Allowing for (low cost) adaptation of the production rate, i.e. a low percentage of fixed costs per unit. A good example are the auto-scalling features of contemporary cloud services.
3. **New Product Flexibility**: Ability of quickly incorporating new products into the chain and offering them to the market. One such example would be a company that runs a form of incubation lab in the software space. This lab would quickly experiment on possible new products and their viability in the market before incorporating them into the portfolio.

### Capacity Strategy decisions: Size, Time and Location

![](images/pascalwhoop/2.png)

-   If one produces too much, the produce must be stored
-   If one produces too little, the customers must waiting
-   If one has capacity but doesn't use it until it is required, the resources must wait

Scale economies allow for reduced marginal cost with increasing total number of items produced. This may not only be due to the spreading of fixed cost but also from bulk orders leading to material cost reduction, learning processes, efficiency improvements etc.

**Tools of the trade for Risk analysis**:
-   Scenario analysis: worst, expected, best case
    1. Determine Factors
    2. Determine Scenarios
    3. Assign probabilities
    4. Estimate Cash Flow for each
    5. Compute expected NPV
-   Decision Tree & Real Option Analysis: sequential decisions, discrete results
    -   Incorporates *decisions* in comparison to scenario analysis which expects a certain end result and then weighs the value of each.
-   Simulation: complex computational models which are part of another lecture

#### Capacity Time<->Size relationship
![](images/pascalwhoop/3.png)

The question of *when* one adapts the capacity. This always includes a certain lag for the upgrade process during which demand can fluctuate. The larger the lag the greater the risk.

| Advantages of Leading                     | Advantages of Lagging                     |
| :---------------------------------------  | :---------------------------------------  |
| ensuring every possible sale can be met       | Only answering sure demand, avoiding high fixed costs       |
| Capacity for adaptive ramp-up in new factories, allows reduction of load on older factories | |

A hybrid of leading and lagging would achieve a mix of both worlds: One builds up stocks until the demand passes the capacity. Now the stocks get used to satisfy demand. However, a new capacity increase is already in planning and will soon complete, allowing for additional capacity to be added soon.

##### Capacity Risk: Real Options Steps

??? Slide 40 TODO

##### Location

![](images/pascalwhoop/5.png)

-   **Source plant**: Produces low cost complex products.
-   **Lead plant**: Got skills and knowhow, can build complex products
-   **Contributor plant**: Got access to new markets and can build complex new products
-   **Offshore plant**: produces specific simple units at low cost
-   **Outpost plant**: produces simple units but has accumulated complex skills and knowledge which makes it valuable for learning
-   **Server plant**: produces simple products in foreign market, opening access to region due to avoidance of taxes, tariffs etc

#### Total Landed Cost Analysis (TLC)

![](images/pascalwhoop/6.png)

-   Allows decision about location of production
-   COGS (Cost of goods sold) + shipping
-   doesn't yet help with the decision in/offshoring

There is a tradeoff point: the higher the service level of a company is set to be, the lower is the cost saving when using offshoring. At some point, it is more logical to use local sources, as shipping and safety stock costs negate all savings of the individual COGS.

## Chapter 8:
## Chapter 9:
## Chapter 10:
## Chapter 11:
## Chapter 12:
