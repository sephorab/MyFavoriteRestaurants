import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ShowAllPage } from '../show-all/show-all'; 
import { AddPage } from '../add/add';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShowAllPage;
  tab3Root = AddPage;
  tab4Root = AboutPage;


  constructor() {

  }
}
