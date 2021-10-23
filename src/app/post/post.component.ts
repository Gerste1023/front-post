import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserPostModel } from '../core/models/user-post.model';
import { AutorService } from '../core/services/autor.service';
import { DataService } from '../core/services/data.service';
import { PostService } from '../core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'autor',
    'correo',
    'titulo_post',
    'contenido_post',
  ];
  dataSource: MatTableDataSource<UserPostModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataSvc: DataService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.dataSvc.getData().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
