import { h, render } from "preact";
import Highcharts from "highcharts";
import { byeIE } from "./byeie"; // loučíme se s IE
import { Kalkulacka } from "./kalkulacka";
/** @jsx h */

byeIE();

// preact kalkulacka
render(<Kalkulacka />, document.getElementById("kalkulacka"));

// grafy
Highcharts.chart("graf-obezita-cas", {
  chart: {
    type: "column",
  },
  title: {
    text: "Nadváha a obezita v letech 2012-2018",
  },
  subtitle: {
    text: "15leté děti",
  },
  credits: {
    text: "Zdroj: HBSC/Zdravá generace",
    href: "http://zdravagenerace.cz/",
  },
  colors: ["#7cb5ec", "#f7a35c"],
  xAxis: {
    categories: [2002, 2006, 2010, 2014, 2018],
    crosshair: true,
  },
  tooltip: {
    shared: true,
    pointFormat: "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y} %</b><br/>",
  },
  yAxis: {
    min: 0,
    title: {
      text: "Podíl dětí s nadváhou a obezitou (%)",
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [{
    name: "Chlapci",
    data: [16, 16.6, 20.4, 20.9, 25.1],
  }, {
    name: "Děvčata",
    data: [6.6, 11.9, 10.5, 10.8, 13.3],
  }],
});

Highcharts.chart("graf-obezita-trida", {
  chart: {
    type: "column",
  },
  title: {
    text: "Nadváha a obezita podle socioekonomického statusu rodiny",
  },
  credits: {
    text: "Zdroj: HBSC/Zdravá generace",
    href: "http://zdravagenerace.cz/",
  },
  xAxis: {
    categories: ["Chudí", "Střední třída", "Bohatí"],
    crosshair: true,
  },
  tooltip: {
    shared: true,
    pointFormat: "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y} %</b><br/>",
  },
  colors: ["#d52834"],
  yAxis: {
    min: 0,
    title: {
      text: "Podíl dětí s nadváhou a obezitou (%)",
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [{
    name: "Nadváha a obezita",
    data: [9.4, 6.1, 3.7],
  }],
});

Highcharts.chart("graf-obezita-regiony", {
  chart: {
    type: "bar",
  },
  title: {
    text: "Nadváha a obezita podle krajů",
  },
  credits: {
    text: "Zdroj: HBSC/Zdravá generace",
    href: "http://zdravagenerace.cz/",
  },
  colors: ["#d52834"],
  xAxis: {
    categories: ["Průměr", "Ústecký", "Západočeský", "Pardubický", "Královéhradecký", "Jihočeský", "Olomoucký", "Karlovarský", "Vysočina", "Jihomoravský", "Liberecký", "Moravskoslezský", "Středočeský", "Zlínský", "Praha"],
    crosshair: true,
  },
  tooltip: {
    shared: true,
    pointFormat: "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y} %</b><br/>",
  },
  yAxis: {
    min: 0,
    title: {
      text: "Podíl dětí s nadváhou a obezitou (%)",
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [{
    name: "Nadváha a obezita",
    data: [21.4, 25.9, 24.4, 24.1, 23.1, 22.7, 22.2, 22.2, 22, 21.5, 21.4, 19.1, 18.4, 18.3, 14.7],
  }],
});
