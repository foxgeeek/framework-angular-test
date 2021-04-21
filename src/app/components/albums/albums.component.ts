import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from 'src/app/core/services';
import { Album } from 'src/app/core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  public albums: Album[];
  displayedColumns: string[] = ['id', 'title'];
  dataSource: MatTableDataSource <Album[]>;
  
  private subs = new SubSink();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;  
  
  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }
    
  ngOnInit() {
    this.getAlbuns();
  }

  getAlbuns() {
   this.subs.sink = this.albumService.getAlbums().subscribe(albums => {
      this.dataSource = new MatTableDataSource(albums);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getAlbumById(id: number) {
    this.router.navigateByUrl(`album/${id}`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}