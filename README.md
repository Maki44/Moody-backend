## **Moody**

The idea behind this project is as a user to do some activity based on your mood and coonect people of the same mood on the same location. The Activities are all happen at the moment no plans,they are set based on a user mood. User can see who are joining the activity, a user can then decided to join if a user like the other users joined the activity, Users joined the same activity can also chat each other. The app trackers the user location and shows activities only near user location.

## **Database**

Diagram of data models:
![Database-model](https://dbdiagram.io/d/6222179354f9ad109a5df884?raw=true)

## **Endpoints**

| Method | Path                    | Purpose                                                             | Required arguments                     |
| ------ | ----------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| POST   | /auth/signup            | create a new user account, a token will be included in the response | email, password, firstName, lastName   |
| POST   | /auth/login             | login with an existing user account, creating a token               | email, password                        |
| GET    | /auth/me                | fetch information of the user connected to the token in store       | none                                   |
| GET    | /moods                  | fetch the data of all the moods                                     | none                                   |
| GET    | /avatars                | fetch all the avatar characterstics                                 | id                                     |
| POST   | /activities/:id         | create a new activity                                               | minAge, maxAge, lat, lng, photo, token |
| POST   | /activities/join/:id    | join activity                                                       | activityId as param token              |
| POST   | /activities/disjoin/:id | disjoin from activity                                               | activityId as param                    |

## **Front end repo**

For more information regarding **Moody** please find the front end repo [HERE](https://github.com/Maki44/Make-friends-Frontend)
