# Final Report
**Team members**: Olabanji Adeyemi, Brant Beswick, Martin Campos, Jeff Kim, Christina Lingfu, Maria Motaher, Aaron Rose
<br>

**Website Link**: https://pgcounty-vote.herokuapp.com/
<br>
## Information Problem
The information problem we were trying to solve had to do with providing a __simpler__ format for displaying voting information and the location of polling centers for the user who is living in __Prince George's County__. We found that many new and current residents are not sure where to look for voting information, as of what destination or the location where they can go for voting.
## Stakeholders
Our stakeholders are the residents of PG County and their state representatives.
## Data
Overall, we tried to provide a system that would allow the user to browse through the application to find information about voting areas in PG County.
## Strategies and Solutions
As for the strategies and solutions, we resolved our information problem by using __PG-County's API__ and __Leaflet__ and adjusted it for our application. As you enter the website, the user will be on the __Home__ page. From there, the user will be able to access three-tabs, __Get Started__, __About Us__, and __Help__. Once the user selects the __Get Started__ tab they will be directed to the page with the PG County polling center map. The user would then give their permission to use their location so the application could identify their closest polling place.
## Technical Decision Rationale
The technical system decision rationale was made based on the need of the project and understanding the needs of the users. Deciding on the use of Leaflet was easy since this library allowed us to display a map and plot markers. We decided __against__ the use of __React__ mainly because the team was unfamiliar with the technology and it was not compatible with our other tools. We choose Heroku since it allowed us to host our website via GitHub.
## Challenges
The challenges and issues we have faced helped create a final system that addresses the information problem. We encountered challenges like how to work the map into a container and how to keep the Leaflet code outside of our `html`. However, we decided to keep the map JavaScript in the `html` to avoid any potential bugs. The main issue which took all our time to solve was having two markers automatically zoom in. This problem was solved through experimental means which resulted in a single line of code.
## Future and Last Remarks
Ultimately, we believe we solved our information problem. We did not want to __overload__ the user with information or steps therefore we kept our navigator at the web page _simple_ and _easy_ to process. Users can locate the nearest polling center and the front page provides details to PG County representatives. We did not want to overload the user with information or steps, therefore, we kept our navigator at the web page simple and easy to process.
<br>

Possible directions that can be taken with this problem would be to add summary positions for each candidate. A subset of this information problem is consuming large amounts of information i.e. policy information which can be lengthy. However, by summarizing these policies we can save people time to make an informed decision. There are issues with expanding this problem in this direction such as personal bias which could lead to misinformation. Before entertaining this expansion we would need to address this issue first.
<br>

We have built a great tool for PG County residents, and anyone who wants to work on it further will be able to contribute through our git repository.
