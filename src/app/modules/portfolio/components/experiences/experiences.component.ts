import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Introdução pessoal',
        p: 'Um pouco de mim',
      },
      text: '<p>Me chamo João Pedro, tenho 20 anos e sou estudante de Ciências da computação. Atualmente estou cursando o quinto semestre e estou em busca da minha primeira experiência profissional. </p>',
    },
    {
      summary: {
        strong: 'Minhas habilidades',
        p: 'Um pouco mais a fundo das minhas habilidades',
      },
      text: '<p>Atualmente, estou focado na área de full-stack, onde desenvolvo e aprimoro minhas habilidades em diversas linguagens e tecnologias. Tenho experiência em tecnologias específicas, como (JavaScript, Angular, node.js, etc) e sou apaixonado por usar essas ferramentas para resolver desafios complexos e criar soluções inovadoras. Minha abordagem é sempre voltada para a integração eficiente entre front-end e back-end, garantindo uma experiência completa e funcional para os usuários. Estou sempre buscando aprender e me atualizar para entregar soluções de qualidade e que atendam às necessidades reais dos projetos.</p>',
    },
    {
      summary: {
        strong: 'Objetivos e Visões futuras',
        p: 'Meus objetivos',
      },
      text: '<p>Estou sempre em busca de aprender mais e evoluir, principalmente na área de desenvolvimento web. Meu objetivo é continuar me aprimorando cada vez mais nos meus conhecimentos de desenvolvimento web, explorando novos caminhos e sempre buscando o melhor em tudo que faço.</p>',
    },
    {
      summary: {
        strong: 'Toque Pessoal e Criativo',
        p: 'Um pouco do meu hobby',
      },
      text: '<p>Quando não estou estudando, gosto de jogar videogames. Essa atividade me permite relaxar e descontrair, ajudando a clarear a mente para que eu possa voltar ao foco com mais disposição e criatividade.</p>',
    },
  ]);
}
