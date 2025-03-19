import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/spotify_logo.png',
      alt: 'Projeto Recriação do Spotify',
      title: 'Recriação do Spotify',
      with: '50px',
      height: '51px',
      description:
        '<p>Realizei a recriação do Spotify como parte de um curso, com o objetivo de construir uma versão funcional com um mini banco de dados em JSON. O projeto foi desenvolvido utilizando HTML, CSS, JavaScrit e JSON, oferecendo uma experiêrncia básica de streaming musical. Durante o processo, foquei em simular a interface e a dinâmica do Spotify, com funcionalidades de pesquisar alguns artistas e botões funcionais.</p>',
      links: [
        {
          name: 'Veja o Projeto',
          href: 'https://github.com/Jpzin1/projeto-spotify',
        },
      ],
    },
    {
      src: 'assets/img/projects/sistema-de-pagamento-logo.png',
      alt: 'Projeto Sistema de ponto Eletrônico',
      title: 'Sistema de ponto Eletrônico',
      with: '50px',
      height: '51px',
      description:
        '<p>Desenvolvi um sistema de registro de ponto para empresas, iniciado como um projeto universitário e posteriormente aprimorado de forma independente. O sistema foi construído com HTML, CSS e JavaScript no front-end, e JavaScript no back-end, com o objetivo de facilitar o controle de entrada e saída de funcionários. Embora o projeto não esteja totalmente concluído, ele já conta com funcionalidades essenciais. </p>',
      links: [
        {
          name: 'Veja o Projeto',
          href: 'https://github.com/Jpzin1/projeto-sistema-de-ponto',
        },
      ],
    },
    {
      src: 'assets/img/projects/conversa-on-line.logo.png',
      alt: 'Projeto Chat On-line com flet',
      title: 'Chat On-line com flet',
      with: '50px',
      height: '51px',
      description:
        '<p>Desenvolvi um chat on-line em tempo real onde o usuário insere seu nome antes de entrar, e ao enviar mensagens, tanto o conteúdo quanto o nome do remetente são exibidos. O chat não possui histórico de mensagens, funcionando de forma totalmente ”ao vivo”. Atualmente, o sistema são está disponível para usuários conectados na mesma rede de internet, pois ainda não foi disponibilizado online. O projeto foi desenvolvido em Python utilizando a biblioteca Flet. </p>',
      links: [
        {
          name: 'Veja o Projeto',
          href: 'https://github.com/Jpzin1/python-dev-flet',
        },
      ],
    },

  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
