# Supply Chain Strategy Summary

University of Cologne winter semester 2017/18

Pascal Brokmeier & Christian Hovestadt

<!-- USAGE INFORMATION

 ## Information

To create this summary there are a few helpers to make work easier:

- first run `npm install -g typescript live-server` as well as `brew install pandoc` or in case of a linux distro `apt install pandoc` to allow live previewing of the created html
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

### 1.1 Operations vs. Strategy
- **Strategy**: Big long-term decisions
- **Operations**: Short-term decisions

To combine them, analysis has to be performed on supply network, operational and process levels.

### 1.2 Positioning View vs. Resource-based View

#### Positioning View [Porter]
|                   | Lower cost      | Differentiation       |
| :---------------: | :-------------: | :-------------------: |
| **Broad Target**  | Cost Leadership | Differentiation       |
| **Narrow Target** | Cost Focus      | Differentiation Focus |

Assumes, that operations excellence is not a source of competitive advantage

> Understanding markets --> Strategic operations decisions

#### Resource-based View
- Competitive advantage derives from (resources and) capabilities, which fulfill the _VRIN-criteria:_
  - valuable
  - rare (unique)
  - inimitable
  - non-substitutable
- Capabilities are dynamic and can be...
  - Process-based
  - Systems- or coordination-based
  - Network-based

> Understanding resources and processes --> Strategic operations decisions

#### Strategic reconciliation of market requirements with capabilities
![](images/chovestadt/16.png)

### 1.3 Analyizing a Company's Operations Strategy

#### The Strategic Role of Operations
![](images/chovestadt/6.png)

#### Decision Areas
- **Capacity strategy**: How should capacity and facilities in general be configured?
- **Supply network strategy**: How should operations relate to its supply chain?
- **Process technology strategy**: Which systems, machines and processes should be chosen?
- **Development and organization**: How should the operation be run long-term?

#### Performance Objectives
- Quality: Being _right_
- Dependability: Being _on time_
- Speed: Being _fast_
- Cost: Being _efficient_
- Flexibility: Being _able to change_

#### Operations Strategy Matrix
![](images/chovestadt/5.png)

### 1.4 Competitive Priorities and Measures
- **Quality**
  - Return rate
  - Reliability
- **Dependability and Speed**
  - Percentage of on-time shipments
  - Prediction accuracy of delivery dates
  - Response time to demand changes
- **Cost**
  - Unit/Total cost
  - Life cylce cost
  - Operating cost
- **Flexibility**
  - Product substitutability
  - Product variants
  - Response to demand changes
- **Innovativeness and Features**
  - Product innovativeness
  - Time to market
- **Environmental Performance**
  - Ease of disassembly and recycling
  - Resource usage

#### Sand-Cone Model
![](images/chovestadt/7.png)

--> Cost efficiency relies on other competitive priorities

## Chapter 2: Systems Thinking

**System thinking** is the process of...

-   thinking in causal loops
-   considering the dimension of time in processes
-   finding leverage points and
-   using them to improve systems with minimal impact / expense

**System dynamics** (developed in the 1950s at MIT) aims to to understand...

- Complex causal relationships over time
- Death Spirals and virtuous circles
- Business irony (e.g. fixes that backfire, things get worse before they get better, tipping points)

### 2.1 Causal Loop Diagram

Causal loops can either be positively reinforcing or negatively reinforcing. Positive loops lead to an exponential growth unless some other external factor inhibits unlimited growth. Negative loops cause goal seeking behavior where the performances of elements converge towards some system specific equilibrium point.

#### Rules for Causal Loop Diagrams

1. Nouns for elements
2. Clear "direction of up" for elements
3. Generally, positive nouns are clearer
4. Think about side effects. Imporant? Include!
5. Negative FB loops: Usually goal seeking, best to include an explicit "gap"
6. Perceived vs. actual state --> often with *delay* to show dynamics
7. KISS, clearly and intuitive. Explanatory purpose not trying to be mathematically sound

### 2.2 Behavior Over Time Diagram

![](images/pascalwhoop/9.png)
![](images/pascalwhoop/10.png)

### 2.3 Stock and Flow Diagram

Adding stocks to a system diagram allow for memory in the system and therefore different states over time. They also allow for non-constant rates of flow and therefore disequilibrium dynamics (bullwhip effects).
![](images/chovestadt/17.png)

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

> **Def: Disruption** [Christensen]<br>
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

### 4.1 Relevance of Implementation

It is argued based on percent numbers of unsucessful projects overall regarding new products. IT mostly over budget, construction is mostly late, automative seems to be doing alright. Clearly, a strong case of **the planning falacy and sunk cost falacy**.

-   Unknown Knowns
-   Known Knowns
-   Known Unknowns <-- you try to compensate with "buffers"
-   Unknown Unknowns <-- these really get you. You don't buffer for those

#### Financial Impact of Time to Market

![](images/pascalwhoop/13.png)

### 4.2 Organizational Implementation

-   Don't put people far away from each other
-   have overlap in stages --> communication
-   Engineers can work best with 2 projects at the same time (on average)
-   Matrix vs Functional organisation and everything in between

### 4.3 Concept Development: The House of Quality

![](images/pascalwhoop/16.png)

1. **What customer wants**: Determined quality attributes desired by market. *Also ranked by importance, higher = better*
2. **How to serve**: approaches of building it by the company. Not competencies unique to company but solution terms for "wants"
3. **Relationship Matrix**: Ranking of factors 1, 3, 5 (size of circle)
4. **Interrelationships**: Relationships between company "hows" (just interactions, unspecified if support or conflict)
5. **Importance Ratings**: Under the Relationship Matrix goes the ratings. Simply sum of factors * customer ranking
6. **Evaluate competitors** regarding wants. G(ood) / P(oor)
7. **Metric based evaluation**: Metric for each "how" and multiple "want", to accurately compare products. Rate both own and competitors

![](images/pascalwhoop/17.png)

This model is especially interesting as it applies the HoQ model to the different stages. Hence for each stage, the wants of the customer are the "hows" of the previous stage:
![](images/pascalwhoop/18.png)

### 4.4 Stage Gate Model [Cooper]

The Stage Gate model includes the idea of having systematic positions or stages in a process where it is expected of to regularly scrap projects that do not manage to pass certain quality or performance criteria (Go/Kill decisions). The decisions are made by a team of *gatekeepers* from management, who are resource owners, but are not as involved as the project managers. This really is common sense but it is required as humans tend to be biased towards wanting to do too much (project falacy) and feel the need to pull through with rationally failed projects (sunk cost falacy, confirmation bias, ...)

## Chapters 5 & 6: Simulation

The simulation was very similar to the second paper of chapter 9, which looks at how to balance near and offshore manufacturing. However, the paper defined correlation between supply and demand. In the simulation, the supply was not fluctuating but fixed and reliable.

## Chapter 7: Capacity Strategy

The topic of this chapter is the process of deciding the long term requirements for capacity sizes as well as time and location. While the focus is "long term" (1-5+ years), the decision process for the size is very similar to that of the newsvendor problem. One has to evaluate both the costs that one incurrs in the case of an investment into new capacity and the expected benefits (income) one might get in return. This is abstracted by an expected demand distribution. The timing tradeoff is that of gitadditional demand distribution information (i.e. a smaller standard deviation) vs. the risk of lost sales opportunities while waiting. The location tradeoff is that of costs versus a service level fulfillment ability. The closer the manufacturing is, the easier it is to fulfill all demand, achieving a high service level.

### 7.1 Capacity & Bottlenecks

> **Def: Capacity** in the static, physical sense, means the *scale* of an operation

#### Key determinants of capacity strategy include:

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

#### Capacity frictions:

-	Lead times
-	Lumpiness
-	Irreversibility
-	(Demand) Uncertainty
-	Scale economics

![](images/pascalwhoop/1.png)

#### Performance Indicators

-   **Bottleneck**: slowest process in system
-   **Throughput**: Number of items that leave system per time University
-   **Capacity**: max throughput of system

### 7.2 Forecasting

**Principle 1:** Always include all predictions on the evolution of all factors:

- Demand
- Supply
- Technology
  - new Technology
  - Learning & Improvements
- cost of capacity
- Strategic Uncertainty

**Principle 2:** Always include uncertainty by time bucket

1. One number forecast: Simple, inexpensive, low-detail
2. Multiple scenario forecast: allows for wider range of cases
3. Full distribution: complex forecasting, best prediction capability

#### Consensus forecasting 
The idea of asking several specialists for their opinion and let them come up with a number that everyone can agree on. This is dangerous, as it allows for human dynamics to nudge the number to something that does not resemble the actual statistical average of all individual estimates. Hence, it looses detail and information value.

### 7.3 Flexibility

1. **Mix Flexibility**: Classic example is a 3D Printer. The ability to create several types of products / services with the same invest. Another example in the service environment would be a general consultant. The opposite would be someone highly specialised.
2. **Volume Flexibility**: Allowing for (low cost) adaptation of the production rate, i.e. a low percentage of fixed costs per unit. A good example are the auto-scalling features of contemporary cloud services.
3. **New Product Flexibility**: Ability of quickly incorporating new products into the chain and offering them to the market. One such example would be a company that runs a form of incubation lab in the software space. This lab would quickly experiment on possible new products and their viability in the market before incorporating them into the portfolio.

### 7.4 Capacity Strategy Decisions: Size, Time and Location

#### Key Trade-off of Capacity Sizing

![](images/pascalwhoop/2.png)

Scale economies allow for reduced marginal cost with increasing total number of items produced. This may not only be due to the spreading of fixed cost but also from bulk orders leading to material cost reduction, learning processes, efficiency improvements etc.

#### Tools of the trade for Risk analysis:

-   Scenario analysis: worst, expected, best case
    1. Determine Factors
    2. Determine Scenarios
    3. Assign probabilities
    4. Estimate Cash Flow for each
    5. Compute expected NPV
-   Decision Tree & Real Option Analysis: sequential decisions, discrete results
    -   Incorporates *decisions* in comparison to scenario analysis which expects a certain end result and then weighs the value of each.
-   Simulation: complex computational models which are part of another lecture

#### Capacity Time <--> Size relationship
![](images/pascalwhoop/3.png)

The question of *when* one adapts the capacity. This always includes a certain lag for the upgrade process during which demand can fluctuate. The larger the lag the greater the risk.

| Advantages of Leading                     | Advantages of Lagging                     |
| :---------------------------------------  | :---------------------------------------  |
| real option: can increase capacity, but no obligation | real option: wait and see |
| ensuring every possible sale can be met       | Only answering sure demand, avoiding high fixed costs       |
| Capacity for adaptive ramp-up in new factories, allows reduction of load on older factories | |

A hybrid of leading and lagging would achieve a mix of both worlds: One builds up stocks until the demand passes the capacity. Now the stocks get used to satisfy demand. However, a new capacity increase is already in planning and will soon complete, allowing for additional capacity to be added soon.

##### Capacity Risk: Real Options Steps

1. Draw decision tree
   - Identify decisions (real options, squares)
   - Identify uncertainties (circles)
   - Identify sequence
2. Quantify
   - Identify probabilities
   - Identify outcome values
3. Work backwards

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

### 8.1 Risk Pooling of Demand Uncertainty

Sharing the risk by aggregating supply/demand locations and pooling the customer demand. Let's assume:

-   1 centralized warehouse supplying iPhones to all of Germany
-   100 stores without cooperation, each having to supply their own region

The differences in demand for separate regions require them to stock much more than they would need if they shared their safety stock pool. However, there are two disadvantages:

-   increased response time
-   increased shipping costs per unit

So overall it can be said that in a market where: Individual shipping costs surcharges are low and response time is not elementary, centralized warehouses are rational. This can be seen with car dealers. Yes, they have cars on stock but mainly for demonstration purposes. A Toyota dealer doesn't however store 10 identical models for customers to walk in and buy one.

#### Square-Root Law ("Benetton Effect")

- Decentralized safety stock $= z\cdot\sigma_D\sqrt{L}\cdot n$
- Centralized safety stock $= z\cdot\sigma_D\sqrt{L}\cdot \sqrt{n}$

### 8.2 Correlation Effects on Risk Pooling

Correlation Coefficients

$$ p = \frac{\text{covariance}}{\sigma_1\sigma_2} = \frac{E[(D_1-\mu_1)(D_2-\mu_2)]}{\sigma_1\sigma_2} $$

Now this obviously leads to covariance in between locations and, if demand is correlated, this needs to be taken into account. Statistics 101 so to speak.

$$ \sigma_{pool} = \sqrt{\sigma^2_1 + 2p\sigma_1\sigma_2 + \sigma^2_2} \le \sigma_1 + \sigma_2 $$

How effective is the pool? Well it depends on the correlation factor. if correlation is at -1 then it has the craziest effect as every missed sale is an additional sale somewhere else and the pool buffers this. A +1 correlation leads to no benefit at all.

$$ \text{effectiveness} = 1 - \frac{\sigma_{pool}}{\sigma_1 + \sigma_2}$$

![](images/pascalwhoop/19.png)

*It is nice to see that all we need to do for this course is understand: Newsvendor model, service level and covariance.*

### 8.3 Specific Form of Aggregation

-   Information centralization
-   Specialization
-   Product substitution
-   Component commonality
-   Postponement
-   System Design

#### System Design Flexibility
![](images/chovestadt/4.png)

This is of course obvious to a rational person. The question is however, how much does the Flexibility improvements cost the company? A $ 2 Mio. costly ERP system doesn't benefit a shopkeep that owns 4 pasta shops. So the ahead of time investment cost for such a flexibility increasing setup always needs to be weighed against the expected savings.

![](images/chovestadt/18.png)

## Chapter 9: Strategic Risk Management: Diversification & Responsive Sourcing

### 9.1 Matching Supply & Demand Characteristics

![](images/chovestadt/19.png)
![](images/chovestadt/20.png)

### 9.2 Operational Hedging and Diversification

#### Setting

- Two resources (1) and (2) with contribution margins $p_1 \geq p_2$ and proportional capacity costs $c_1, c_2$. Economies of scale are ignored.
- Probability distribution $P$ from which (uncertain) production capabilities and demands are drawn

![](images/chovestadt/21.png)

#### Strategy options
- 1st stage strategy groups:
  - *Operational Hedging Strategies* if $Q_1 + Q_2 > d$
  - *Diversification Strategies* if $Q_1 > 0$ and $Q_2 > 0*
  - *Single Sourcing Strategies* if $Q_1 = d$ and $Q_2 = 0$ (or other way round)
- 2nd stage: simple LP maximization problem

#### Capacity Shadow Prices
![](images/chovestadt/22.png)

#### Optimal Sourcing Strategies
![](images/chovestadt/23.png)

#### Impact of correlation

- Impact on optimal profit
  - Positive supply-demand correlation increases profit
  - Positive inter-supply correlation decreases profit
  - But: Supply hedges still valuable under perfectly correlated uncertainty
- Impact on optimal sourcing form:
  - Supply-demand correlation makes focal resource more attractive
  - This does not imply restricted use of the other resource
- Impact on optimal allocation:
  - Under random capacity: lower-margin resource is used to adjust service level
  - Under scale hedges ($K_i = Q_i \cdot R_i$): Both resources are used to adjust service level

### 9.3 Responsive Sourcing

#### Setting
![](images/chovestadt/24.png)

#### States of the World
![](images/chovestadt/25.png)

#### Optimal Sourcing Strategies
![](images/chovestadt/26.png)

#### Conclusion
The responsive supply determines the service level

--> Use cheap supplier for base load and cover demand variance with the responsive supplier

## Chapter 10: Strategic Sourcing & Supplier Relationships

-   a small amount of savings in procurement may lead to a fairly large profit increase
-   complexity through too much outsourcing vs. in-house complexity

### 10.1 Make-or-buy decisions

![](images/pascalwhoop/27.png)

####Total Cost of Ownership (TCO)

-   TCO captures the entire lifetime of a product, not just aquisition (compare TLC)
-   can be used to compare different suppliers with a holistic evaluation of their offers
-   is made up of
    -   purchase price
    -   internal costs
    -   joint costs

#### Total Landed Cost Analysis (TLC)

Total supply chain cost from origin to destination for a *given service level*

### 10.2 Supplier-Relationships

- *Transactional* or *Market-based* supply arrangements: Emphasis on contracting
- *Partnership* supply arrangements: Emphasis von relationships

![](images/pascalwhoop/28.png)

#### The Nissan Case – Research Discussion
#### Responsive Sourcing – Research Discussion

## Chapter 11: Lean & Mass Customization Strategies
### 11.1 Lean Management
#### Traditional vs. lean flow
![](images/chovestadt/11.png)

--> Reduce inventory not only to cut cost, but also to reveal the operation's problems

#### Elements of Lean
- Customer-based demand triggers
- Synchronized flow
- Continous improvement
- Waste elimination

#### Goals
Produce the required items, at the required time, in the required quantity
- Zero defects
- Zero inventories
- Zero set-up time
- Zero lead time
- Zero parts Handling
- Zero breakdown
- Batch size of one

#### Lean Strategy
- Capacity Strategy:
	- Sacrifice high utilization for fast and dependable throughput
- Supply Network:
	- Supplier development to ensure quality and delivery conformance
	- Integrated supply network coordination to ensure synchronous flow
	- Work on functional barriers
- Process Technology:
	- Flexible technology for small batch sizes
	- Reliability
	- Reduction of process variability
- Development & Organization:
	- Continuous improvement through waste elimination
	- Smooth synchronized flow exposes waste
	- People motivation & involvement through reduced buffering
	
#### Key Tools for Implementing a Lean Strategy
- *Kanban:* Scheduling is started from the finished product/customer
- *Two Bin System:* The waiter fills one glass while you drink the other one
- *Poka-Yoke:* Simple, inexpensive, failsafe devices or systems which prevent mistakes from being made or from becoming defects
- *Single Minute Exchange of Dies (SMED):* Setup time reduction by converting internal setup (which can only be performed when the process is stopped) to external setup (which can be performed in advanced), streamlining them and performing them in parallel (e.g. F1 pit stop)
 
### 11.2 Mass Customization
> **Def: Mass Customization**<br>
The customization of products or services for a mass market of customers, with near mass production efficiency through flexible and responsive pull-processes

#### Why Customization?
- Higher transparency of choice for customer
- Shorter product life cycles
- Products and services are more configurable
- Advances in manufacturing techonolgy and order-taking interfaces
- Higher coverage of customer needs
- Build to order --> Lower inventories
- Charge a premium

#### Customer Order Decoupling Point (CODP)
The point at which the push-processes are decoupled from the pull-processes
- Before CODP: Production based on estimated demand
- After CODP: Production based on customer demand

![](images/chovestadt/12.png)

#### Paradox of Choice
Studies indicate more customization options are not always better since customers may be overwhelmed by the choice

#### Approaches to Mass Customization
![](images/chovestadt/13.png)

### 11.3 Paper about Additive Manufacturing

The paper discusses the chances and challenges of additive manufacturing for the global markets as well as for the economy of the US as a nation. It's a predictive article, meaning it's based on hypothesis and theories without proof but on educated guesses.

One major assumption the author makes and bases his arguments on is the assumption that AM is not suffering from scale economies or rather the lack of them due to low numbers of production. He argues that this leads to massive changes in the supply chains of most products and will affect everyone quiet strongly.

*I argue that he does not once reason why the AM will not suffer from economies of scale. Some reasons why it should also suffer from EOS:*

-   fixed costs such as rent, insurance, machines (3D printers), staff will still exist
-   base materials for products will still have to be purchased --> large shippments are still cheaper
-   large companies still have learning and, bargaining power and capacity utilization as an advantage

The author partially argues against these points in later paragraphs. The arguments are partially valid but without any funding proof. The first point he also notes, the second one he argues is less relevant, as AM firms can buy base materials for all sorts of products instead of having to buy individual distinct items. Hence, they have EOS by being able to purchase in bulk for several different products. This however assumes other firms cannot buy at one supplier and get discounts even though they order "10% of everything". It also assumes that competitors do not also produce from raw materials. If we were to talk e.g. about different bolts, screws and hinges, the TM manufacturers also produce these from raw materials and hence also purchase just one material in bulk.

The author also argues that learning and experience is less relevant for AM firms. I disagree, as the technology certainly hasn't become simpler and hence, a highly skill workforce is still required. Also, AM firms don't really compete with classic, mainly human based manufacturing but with highly automated processing plants. Hence, they compete with robotic assembly lines.

A tradeoff curve would be required for all these to see the *actual* differences in EOS. This probably requires repeated empiricical data.

Assuming small firms *can* adequately compete with large firms through the deployment of AM, the author makes an interesting point. He introduces a **tradeoff between organzational costs and economies of scale.**

While the author introduces the idea of large firms adopting AM and then moving towards many small franchised firms close to the customer, the inherent conclusion still is that there needs to be a global network of raw material deliveries. The concept of the "platform economy" therefore goes hand in hand with the idea of many small companies as some platform is required to integrate their economic interactions.

## Chapter 12: Operations Strategy: Implementation & Improvement

### 12.1 Operations Strategy Implementation

#### Industry Excellence Framework
![](images/chovestadt/9.png)

#### Strategy cascading

basically, it's the modularisation of strategy from abstract to concrete: Translate targets into actions which become targets on lower levels again

![](images/chovestadt/10.png)

#### Balanced Scorecards: 4 fields of a balanced strategy

![](images/pascalwhoop/22.png)

#### Performance Targets & Levels of Aggregation
![](images/chovestadt/14.png)

Generally, this chapter is just all about **high level vs. low level** strategy reach, the span between *abstract goals* and *detailed performance measures* at the operational level.

### Top-Down vs. Bottom-Up Strategy

This section is related to a paper by Prof. Sting (yet another one, quiet the printing press this guy). Analysed were a few companies with ˜100 action plans. The following stats will paint the picture

![](images/pascalwhoop/23.png)
![](images/pascalwhoop/24.png)

#### Integrated Process of Operations Strategy with Bottom-Up Strategy
![](images/pascalwhoop/25.png)

- strategy is influenced on all levels of the hierarchy
- top-down is usually externally driven (i.e. market view not capabilities view) and is effective for direction/control
- bottom-up taps into specific skills and iterative Improvements


### 12.3 Improvement Strategy

How do you get from a current state to an improved state? Overall concepts of learning as a company.

- *Continuous Improvement Processes:* Reduce unit cost
- *Radical Improvement Processes:* Reduce unit cost & increase non-cost competency

#### Improvement as Feedback Loop
![](images/chovestadt/15.png)

#### Learning Models: Conceptual vs. Operational
![](images/pascalwhoop/26.png)

### 12.4 Learning Curve
- basically Moore's Law (defunked?)
- represents "learning by doing"
- "Each doubling of cumulative volume implies cost reduces at rate $L$"

**Learning curve**: $c(x) = c_0 \times x^{-\alpha}$

**Learning rate L:** $L = 2^{-\alpha}$

#### How to estimate the Learning Curve Empirically

1. Plot on log-log
2. Linear regression of points (min squared diff)
3. $f(x) = \alpha x + b$
4. use $\alpha$ to compute $c_0$

An interesting fact about learning effects is the ability to extrapolate the global improvements of technologies. While we cannot say *how* we manage to have 400x faster CPUs in X years, we can say with reasonable certainty, *that* we will have them.

## Chapter 13: Group Presentations
There was no regular lecture in session 13, as the group assignments have been presented.

## Chapter 14: Benchmarking
> **Def:** A **benchmark** is an organization, process or product that is exemplary.

> **Def: Benchmarking** is the process that enables companies to define gaps in their performance and practices.

#### Types of Benchmarking

- Functional/Process benchmarking
- Financial benchmarking
- Product benchmarking
- Internal vs. external benchmarking
- Competitive vs. non-competitive benchmarking

#### Benchmarking Process (The Xerox Principle)
1. What to benchmark?
2. What to measure?
3. Who to benchmark?
4. Data collection
5. Data analysis & Gap identification
6. Goal setting & Action plan development
7. Process monitoring

<br>
<br>
The End :)