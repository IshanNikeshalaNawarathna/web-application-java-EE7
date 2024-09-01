/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.User;

/**
 *
 * @author Ishan
 */
@WebServlet(name = "UserLogin", urlPatterns = {"/UserLogin"})
public class UserLogin extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Gson gson = new Gson();
        User user = gson.fromJson(request.getReader(), User.class);

        HashMap<String, User> userMap = (HashMap<String, User>) request.getServletContext().getAttribute("userMap");

        JsonObject jsonObject = new JsonObject();

        if (userMap.containsKey(user.getMobile())) {

            User users = userMap.get(user.getMobile());

            if (users.getPassword().equals(user.getPassword())) {
                request.getSession().setAttribute("user", users);
                jsonObject.addProperty("msg", "Success");
            } else {
                jsonObject.addProperty("msg", "error");
            }

        } else {
            jsonObject.addProperty("msg", "error");
        }

        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(jsonObject));

    }

}
