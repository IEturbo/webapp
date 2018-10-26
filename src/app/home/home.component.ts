import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit , OnChanges {
  @Input()
  valueParam = 'value';
  // value对应的字段名

  @Input()
  textParam = 'text';
  // text对应的字段名

  itemsOpen = '';

  selectedItem: any = {};

  // [{'name':'主机名称',value:'jiangtao-PC[172.20.10.10]'},{'name':'系统版本',value:'Microsoft Windows 7 x64'},{'name':'服务数',value:'2'}]
  @Input()
  data: any[] = [
    {
      value: 1,
      'text': 'qwe1'
    },
    {
      value: 3,
      'text': 'qwe2'
    },
    {
      value: 4,
      'text': 'qwe3'
    }
  ];

  toggleCaret: boolean;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder = '';
  constructor() { }

  ngOnInit() {
    this.toggleCaret = true;
      this.selectedItem[this.valueParam] = '';
      this.selectedItem[this.textParam] = '请选择';
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  setBtnIClasses() {
      const btnIClass: any = {
          'fa': true,
          'fa-caret-down': this.toggleCaret,
          'fa-caret-up': !this.toggleCaret
        }
      return btnIClass;
  }

  toggleCaretClass() {
      this.toggleCaret = !this.toggleCaret;
  }

  toggle(item: any) {
      this.selectedItem = item;
      this.toggleCaretClass();
      this.change.emit(item);
  }
}

interface DataItem {
  value: string,
  text: string
}
