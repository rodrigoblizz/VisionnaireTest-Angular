import { Component, OnInit } from '@angular/core';
import {ProdutoService} from './../produto.service';
import {Router} from '@angular/router';
import {Produto} from './../produto.model';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto = {
    sku: '',
    nome: '',
    descricao: '',
    preco: null,
    quantidade: null
  }

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criarProduto(): void{
    this.produtoService.criar(this.produto).subscribe(() => {
    this.produtoService.showMessage('Produto adicionado com sucesso!')
    this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/produtos'])
  }

}
