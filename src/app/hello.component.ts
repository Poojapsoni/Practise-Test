import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
   Check console for output
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  data = {
    name: 'Megaport',
    address: {
        office: {
            unit: 'Level 3',
            street: '825 Ann Street',
            suburb: 'Fortitude Valley',
            city: 'Brisbane',
            state: 'Queensland',
            postcode: 4006,
        },
    },
    industry: {
        type: 'Internet and telecommunications',
        asxListed: true,
    },
  };

  value: object;

  ngOnInit(): void {
    console.log(this.getValue('address.office.suburb', this.data)); // Output: Fortitude Valley
    console.log(this.getValue('industry.asxListed', this.data)); // Output: true
    console.log(this.getValue('nonexistent.property', this.data)); // Output: undefined
  }

  getValue(path, obj) {
    const properties = path.split('.');
    this.value = obj;
    
    for (const prop of properties) {
        if (this.value.hasOwnProperty(prop)) {
            this.value = this.value[prop];
        } else {
            return undefined; // Property not found
        }
    }
    
    return this.value;
  }
}
