# Supply Chain Strategy Summary

University of Cologne winter semester 2017/18

Pascal Brokmeier & Christian Hovestadt

<!-- USAGE INFORMATION

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

-->

## Chapter 1: Operations Strategy
## Chapter 2: Systems Thinking

System thinking is the process of

-   thinking in causal loops
-   considering the dimension of time in processes
-   finding leverage points and
-   using them to improve systems with minimal impact / expense

### Causal loops

Causal loops can either be positively reinforcing or negatively reinforcing. Positive loops lead to an exponential growth unless some other external factor inhibits unlimited growth. Negative loops cause goal seeking behavior where the performances of elements converge towards some system specific equilibrium point.
![](images/pascalwhoop/9.png)

#### Rules for Causal Loop Diagrams

1. Nouns for elements
2. Clear "direction of up" for elements
3. Generally, positive nouns are clearer
4. Think about side effects. Imporant? Include!
5. Negative FB loops: Usually goal seeking, best to include an explicit "gap"
6. Perceived vs. actual state --> often with *delay* to show dynamics
7. KISS, clearly and intuitive. Explanatory purpose not trying to be mathematically sound

### Behavior Over Time Diagram

![](images/pascalwhoop/10.png)

### Stock and Flow Diagram

Adding stocks to a system diagram allow for memory in the system and therefore different states over time. They also allow for non-constant rates of flow and therefore disequilibrium dynamics (bullwhip effects).


## Chapter 3: New Product Development: Planning

### 3.1 Process of New Product Development
Find right balance between creative freedom and process discipline
Idealized process structure visualized by management:

![](images/pascalwhoop/15.png)

Idealized product development process: *This is very similar to the waterfall model in SD and will therefore by not included in detail in this summary.*

1. Planning
2. Concept Development
3. System Level Design
4. Detail Design
5. Testing and Refinement
6. Production ramp-up

**Maturity stages of the NPD Process**
1. No process
2. Process defined but not used / known / good / accessible
3. Process used and understood, good for consistent NPD projects
4. Continuous Process Improvement: Everyone is living it

### 3.2 Relevance of Planning
- Objective: Ensure, that the right NPD projects are pursued
- Decisions:
  - Which individual NPD projects?
  - What product mix, platforms and derivatives?
  - When to execute which NPD project? (sequence and timing)
  - How to react to risks?
- Output:
  - Aggregate product plan
  - Mission statement for each NPD
  
### 3.3 Evaluation and Priorization
The following 4 components are combined in the aforementioned Aggregate product plan:

- Competitive Strategy
  - Technology leadership vs. Cost leadership
  - Innovation vs. Imitation
  - Sustaining vs. Disruptive
- Market Segmentation
- Technological Trajectories
- Product Platforms

> **Def: Disruption** (Christensen)<br>
1. New product/service with a different set of performance attributes<br>
2. Underperforming on attributes of 'old' product that mainstream customers value<br>
3. High improvement potential

#### Balancing the Portfolio
![](images/chovestadt/1.png)

### 3.4 Product Architecture
> **Def: Product Architecture**<br>
The arrangement of physical elements into chunks which become the building blocks for the product or family of products

#### Modular vs. Integral Architecture
![](images/chovestadt/2.png)

#### Types of Modularity
![](images/chovestadt/3.png)

### 3.5 Risk Management
> **Def: Risk Management** is the art and science of _identifying_ and _responding_ to project risk throughout the life of a project and in the best interests of its objectives.

#### Risk Management Process
1. Identification
  - Categorization
2. Assessment & Priorization
  - Quantification
  - Modelling
  - Reporting
3. Management (Response Strategy)
  - System standards (Processes, Responsibilities, ...)
  - Insurance
  - Prevention
  - Mitigation
  - Contingent planning (Plan B)
4. Documentation & Learning
  - For this project
  - For future projects
  
#### Decision-Event-Tree
A simple tool to assess risks by assining an expected revenue to each possible outcome and probabilities to each event. Decisions are represented as boxes, events as circles.

## Chapter 4: New Product Development: Implementation

### Relevance of Implementation

It is argued based on percent numbers of unsucessful projects overall regarding new products. IT mostly over budget, construction is mostly late, automative seems to be doing alright. Clearly, a strong case of **the planning falacy and sunk cost falacy**.

-   Unknown Knowns
-   Known Knowns
-   Known Unknowns <-- you try to compensate with "buffers"
-   Unknown Unknowns <-- these really get you. You don't buffer for those

![](images/pascalwhoop/13.png)

### Organizational Implementation

-   Don't put people far away from each other
-   have overlap in stages --> communication
-   Engineers can work best with 2 projects at the same time (on average)
-   Matrix vs Functional organisation and everything in between

### Concept Development: The House of Quality

![](images/pascalwhoop/16.png)


1.   **What customer wants**: Determined quality attributes desired by market. *Also ranked by importance, higher = better*
2.   **How to serve**: approaches of building it by the company. Not competencies unique to company but solution terms for "wants"
3.   **Relationship Matrix**: Ranking of factors 1, 3, 5 (size of circle)
4.  **Interrelationships**: Relationships between company "hows" (just interactions, unspecified if support or conflict)
5. **Importance Ratings**: Under the Relationship Matrix goes the ratings. Simply sum of factors * customer ranking
6. **Evaluate competitors** regarding wants. G(ood) / P(oor)
7. **Metric based evaluation**: Metric for each "how" and multiple "want", to accurately compare products. Rate both own and competitors

![](images/pascalwhoop/17.png)

This model is especially interesting as it applies the HoQ model to the different stages. Hence for each stage, the wants of the customer are the "hows" of the previous stage:
![](images/pascalwhoop/18.png)

### Stage Gate Model

The Stage Gate model includes the idea of having systematic positions or stages in a process where it is expected of the company to regularly scrap projects that do not manage to pass certain quality or performance criteria. This really is common sense but it is required as humans tend to be biased towards wanting to do too much (project falacy) and feel the need to pull through with rationally failed projects (sunk cost falacy, confirmation bias, ...)

## Chapter 5 & 6: Simulation

The simulation was very similar to the second paper of chapter 9, which looks at how to balance near and offshore manufacturing. However, the paper defined correlation between supply and demand. In the simulation, the supply was not fluctuating but fixed and reliable.

## Chapter 7: Capacity Strategy

The topic of this chapter is the process of deciding the long term requirements for capacity sizes as well as time and location. While the scope is "long term", the decision process for the size is very similar to that of the newsvendor problem. One has to evaluate both the costs that one incurrs in the case of an investment into new capacity and the expected benefits (income) one might get in return. This is abstracted by an expected demand distribution. The timing tradeoff is that of gitadditional demand distribution information (i.e. a smaller standard deviation) vs. the risk of lost sales opportunities while waiting. The location tradeoff is that of costs versus a service level fulfillment ability. The closer the manufacturing is, the easier it is to fulfill all demand, achieving a high service level.

**Def: Capacity** in the static, physical sense, means the *scale* of an operation

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

**Capacity frictions:**

-	Lead times
-	Lumpiness
-	Irreversibility
-	(Demand) Uncertainty
-	Scale economics

![](images/pascalwhoop/2.png)

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
| real option: can increase capacity, but no obligation | real option: wait and see |
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

## Chapter 8: Strategic Risk Management: Diversification & Risk Pooling

### Risk Pooling of Demand Uncertainty

Sharing the risk by aggregating supply/demand locations and pooling the customer demand. Let's assume:

-   1 centralized warehouse supplying iPhones to all of Germany
-   100 stores without cooperation, each having to supply their own region

The differences in demand for separate regions require them to stock much more than they would need if they shared their safety stock pool. However, there are two disadvantages:

-   increased response time
-   increased shipping costs per unit

So overall it can be said that in a market where: Individual shipping costs surcharges are low and response time is not elementary, centralized warehouses are rational. This can be seen with car dealers. Yes, they have cars on stock but mainly for demonstration purposes. A Toyota dealer doesn't however store 10 identical models for customers to walk in and buy one.

### Correlation Effects on Risk Pooling

Correlation Coefficients

$$ p = \frac{\text{covariance}}{\sigma_1\sigma_2} = \frac{E[(D_1-\mu_1)(D_2-\mu_2)]}{\sigma_1\sigma_2} $$

Now this obviously leads to covariance in between locations and, if demand is correlated, this needs to be taken into account. Statistics 101 so to speak.

$$ \sigma_{pool} = \sqrt{\sigma^2_1 + 2p\sigma_1\sigma_2 + \sigma^2_2} \le \sigma_1 + \sigma_2 $$

How effective is the pool? Well it depends on the correlation factor. if correlation is at -1 then it has the craziest effect as every missed sale is an additional sale somewhere else and the pool buffers this. A +1 correlation leads to no benefit at all.

$$ \text{effectiveness} = 1 - \frac{\sigma_{pool}}{\sigma_1 + \sigma_2}$$

![](images/pascalwhoop/19.png)

*It is nice to see that all we need to do for this course is understand: Newsvendor model, service level and covariance.*

### Specific Form of Aggregation:

-   Information centralization
-   Specialization
-   Product substitution
-   Component commonality
-   Postponement
-   System Design

![](images/pascalwhoop/20.png)

This is of course obvious to a rational person. The question is however, how much does the Flexibility improvements cost the company? A $ 2 Mio. costly ERP system doesn't benefit a shopkeep that owns 4 pasta shops. So the ahead of time investment cost for such a flexibility increasing setup always needs to be weighed against the expected savings.

TODO: Chaining 


## Chapter 9: Strategic Risk Management: Diversification & Responsive Sourcing
## Chapter 10: Strategic Sourcing & Supplier Relationships
## Chapter 11: Lean & Mass Customization Strategies
## Chapter 12: Operations Strategy: Implementation & Improvement
## Chapter 13: TBD
