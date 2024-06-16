import { Component, OnInit } from '@angular/core';
interface BakedGood {
  id: '';
  name: string;
  type: string;
  topping: string;
}
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  constructor() {}

  modal = 'modal';
  name = 'Angular';
  newBakedGood: BakedGood = { id: '', name: '', type: '', topping: '' };
  bakedGoods = [
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Regular Glazed',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Regular Sugar',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Regular Powdered Sugar',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Regular Chocolate with Sprinkles',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Regular Chocolate',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Regular Maple',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate None',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate Glazed',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate Sugar',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate Powdered Sugar',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate Chocolate with Sprinkles',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate Chocolate',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Chocolate Maple',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry None',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry Glazed',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry Sugar',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry Powdered Sugar',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry Chocolate with Sprinkles',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry Chocolate',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: 'Blueberry Maple',
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food None",
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food Glazed",
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food Sugar",
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food Powdered Sugar",
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food Chocolate with Sprinkles",
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food Chocolate",
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      topping: "Devil's Food Maple",
    },
    {
      id: '0002',
      type: 'donut',
      name: 'Raised',
      topping: 'Regular None',
    },
    {
      id: '0002',
      type: 'donut',
      name: 'Raised',
      topping: 'Regular Glazed',
    },
    {
      id: '0002',
      type: 'donut',
      name: 'Raised',
      topping: 'Regular Sugar',
    },
    {
      id: '0002',
      type: 'donut',
      name: 'Raised',
      topping: 'Regular Chocolate',
    },
    {
      id: '0002',
      type: 'donut',
      name: 'Raised',
      topping: 'Regular Maple',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Regular None',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Regular Glazed',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Regular Chocolate',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Regular Maple',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Chocolate None',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Chocolate Glazed',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Chocolate Chocolate',
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      topping: 'Chocolate Maple',
    },
    {
      id: '0004',
      type: 'bar',
      name: 'Bar',
      topping: 'Regular Chocolate',
    },
    {
      id: '0004',
      type: 'bar',
      name: 'Bar',
      topping: 'Regular Maple',
    },
    {
      id: '0005',
      type: 'twist',
      name: 'Twist',
      topping: 'Regular Glazed',
    },
    {
      id: '0005',
      type: 'twist',
      name: 'Twist',
      topping: 'Regular Sugar',
    },
    {
      id: '0006',
      type: 'filled',
      name: 'Filled',
      topping: 'Regular Glazed',
    },
    {
      id: '0006',
      type: 'filled',
      name: 'Filled',
      topping: 'Regular Powdered Sugar',
    },
    {
      id: '0006',
      type: 'filled',
      name: 'Filled',
      topping: 'Regular Chocolate',
    },
    {
      id: '0006',
      type: 'filled',
      name: 'Filled',
      topping: 'Regular Maple',
    },
  ];
  sortProperty: string = 'id';
  sortOrder = 1;
  loading = false;
  searchText: string = '';


  ngOnInit(): void {
    this.sortIcon('id');
    this.closeModal();
  }

  addBakedGood() {
    this.newBakedGood.id = this.newBakedGood.id;
    this.bakedGoods.push({ ...this.newBakedGood });
    this.bakedGoods = [...this.bakedGoods];
    this.newBakedGood = { id: '', name: '', type: '', topping: '' };
    this.modal = 'modal-close';
  }

  sortBy(property: string) {
    this.sortOrder = property === this.sortProperty ? this.sortOrder * -1 : 1;
    this.sortProperty = property;
    this.bakedGoods = [
      ...this.bakedGoods.sort((a: any, b: any) => {
        // sort comparison function
        let result = 0;
        if (a[property] < b[property]) {
          result = -1;
        }
        if (a[property] > b[property]) {
          result = 1;
        }
        return result * this.sortOrder;
      }),
    ];
  }

  sortIcon(property: string) {
    if (property === this.sortProperty) {
      return this.sortOrder === 1 ? '☝️' : '👇';
    }
    return '';
  }

  openModal(inp: string) {
    this.modal = 'modal-open';
  }

  closeModal() {
    this.modal = 'modal-close';
  }
}
