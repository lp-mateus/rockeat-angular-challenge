import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private readonly produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe({
      next: (produtos) => {
        console.log(produtos);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
