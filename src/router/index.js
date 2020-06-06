import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Employee from "../views/Employee.vue";
import NewEmployee from "../views/NewEmployee.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/employees",
    name: "employee",
    component: Employee
  },
  {
    path: "/employees/add",
    name: "addEmployee",
    component: NewEmployee
  }
];

const router = new VueRouter({
  routes
});

export default router;
