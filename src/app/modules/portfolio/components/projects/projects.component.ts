import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<[IProjects]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description: 'Meu portfólio em Angular.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br/',
        },
      ],
    },
  ]);
}
