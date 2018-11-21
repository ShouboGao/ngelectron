import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  public isload:any;
  public list:any;
  public isHint:any;
  public hintMsg:any;
  public headers = new Headers({'Content-Type': 'application/json'});

  constructor() {
  }

  ngOnInit() {
    $(".sub-menu li").click(function(){
      $(".page-sidebar-menu>li").removeClass('open');
      $(this).parents("li").addClass("open");
      $(this).parents("li").siblings("li").removeClass('open');
    })
  }
  /* choosenav(key){
    $('.mytab>div').removeClass('choose')
    if(key == 2){
      $('.sub-menu>li').removeClass('active')
    }else{
      $('.sub-menu>li').removeClass('active')
      $('.sub-menu>li:nth-child('+key+')').addClass('active')
    }
    
  }
  mytabclick(key){
    $('.mytab>div').removeClass('choose')
    $('.mytab>div:nth-child(' + key +')').addClass('choose')
  } */
}
