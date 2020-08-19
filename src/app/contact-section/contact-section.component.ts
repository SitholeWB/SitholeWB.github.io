import { Component, OnInit } from '@angular/core';
import { ContactDetail } from '../models/contact-detail'
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  contactItems: ContactDetail[] = [
    {
      description: '20 Jan 1992, South Africa, KwaZulu-Natal',
      icon: 'birthday-cake',
      iconType: 'fas',
      url: ''
    },
    {
      description: '34 Ryde Avenue, Glenwood Durban',
      icon: 'map-marker-alt',
      iconType: 'fas',
      url: ''
    },
    {
      description: 'someone@somewhere.co.za',
      icon: 'envelope',
      iconType: 'fas',
      url: ''
    },
    {
      description: 'Linkedin Profile',
      icon: 'linkedin',
      iconType: 'fab',
      url: 'https://www.linkedin.com/in/sitholewb'
    },
    {
      description: 'Github Profile',
      icon: 'github',
      iconType: 'fab',
      url: 'https://github.com/SitholeWB'
    },
    {
      description: 'Twitter Profile',
      icon: 'twitter',
      iconType: 'fab',
      url: 'https://twitter.com/sitholewb'
    },
  ];

  languageItems: ContactDetail[] = [
    {
      description: 'English',
      icon: 'github',
      iconType: 'fab',
      url: ''
    },
    {
      description: 'IsiZulu',
      icon: 'twitter',
      iconType: 'fab',
      url: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
