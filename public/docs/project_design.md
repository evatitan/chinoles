# Design Version 1
1. Sketch the main user flows (browse → select course → purchase)
is an online language academy, when user entre:
- accept cookies in the bottom of the page.
- home page, 
 - to introduce chinol, 
 - online class demo, 
 - reservar or try a clase, 
 - auto-test(need register).

- courses page, 
 - a sub page for showing all Chinese courses, click every card, there are more infos about the courses.
 - a sub page for showing all Spanish courses, click every card, there are more infos about the courses.
 - a sub page for auto-test for quiz.
 - in the future, I will record online course for selling. online course can buy directly.

- resources page
 - a sub page blog, will be made by .md
 - a sub page documents, will be some materiales

- user profile page
 - users staff

- user cart page
 - cart detail

- social medias
 - discord
 - telegram
 - wechat

2. Define your data models (User, Course, Order, etc.)


# Database Schema
1. users: id, user_name, password(hash), avatar, role, language, level, email.
2. courses: id, title, description, prices, img, category, duration, model
3. order: id, user_id, courses_id
4. materials: id, file, courses_id
5. permission: TODO
6. login: i wanna use JWT for authentication

# Backend API
1. 

# Frontend Structure Setup

# Frontend Development
