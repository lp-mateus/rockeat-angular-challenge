import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public produtos: Produto[] = [];
  public produtosFiltrado: Produto[] = [];
  // pagination
  public readonly delta: number = 9;
  public totalPages: number = 0;
  public pages: number[] = [];

  constructor(private readonly produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        this.produtosFiltrado = produtos.slice(0, this.delta);
        this.totalPages = Math.ceil(this.produtos.length / this.delta);
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i);
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onClickNewPage(page: number): void {
    this.produtosFiltrado = this.produtos.slice(
      this.delta * (page - 1),
      this.delta * page
    );
  }
}
