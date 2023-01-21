import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  IDS: any = [];
  dataLists: any = [
    {
      id: 'data-list-01',
      title: 'Sample data list 01',
      content: ['Hello world']
    },
    {
      id: 'data-list-02',
      title: 'Sample data list 02',
      content: ['Hello world 02']
    },
    {
      id: 'data-list-03',
      title: 'Sample data list 03',
      content: ['Hello world 03']
    },
    {
      id: 'data-list-04',
      title: 'Sample data list 04',
      content: ['Hello world 04']
    },
    {
      id: 'data-list-05',
      title: 'Sample data list 05',
      content: [
        'hello', 'world', 'how'
      ]
    },

  ]

  ngOnInit() {
    this.IDS = this.dataLists.map((list: any) => list.id);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
