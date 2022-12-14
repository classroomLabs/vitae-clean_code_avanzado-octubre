// ! npm run 1-2-1

// * interface to be implemented by all prototypes
interface Prototype<T> {
  // * method to clone the prototype with custom mutations
  clone(): T;
}

type Primitive = string | number | boolean;

class Product implements Prototype<Product> {
  public id = Math.random().toString();
  public timestamp = new Date().getTime();
  public name = "";
  public primitiveProperty: Primitive | null = null;
  public objectProperty: object | null = null;
  public arrayProperty: unknown[] = [];

  public clone(name?: string): Product {
    // return this.mutateNew();
    // return this.mutateCloned();
    return this.mutateBusiness(name);
  }

  private mutateBusiness(name: string = this.name) {
    const newProduct = new Product();
    // * mutation
    newProduct.name = name;
    // * copy all properties
    newProduct.primitiveProperty = this.primitiveProperty;
    newProduct.objectProperty = { ...this.objectProperty };
    newProduct.arrayProperty = [...this.arrayProperty];
    return newProduct;
  }

  private mutateNew() {
    const newProduct = new Product();
    // * copy all properties
    newProduct.name = this.name;
    newProduct.primitiveProperty = this.primitiveProperty;
    newProduct.objectProperty = { ...this.objectProperty };
    newProduct.arrayProperty = [...this.arrayProperty];
    return newProduct;
  }

  private mutateCloned() {
    const cloned = this.getDeepClone();
    // * mutate the clone
    cloned.id = Math.random().toString();
    cloned.timestamp = new Date().getTime();
    return cloned;
  }

  private getDeepClone() {
    const serialization = JSON.stringify(this);
    const clone = JSON.parse(serialization);
    return clone;
  }
}

// a consumer class
export class Client {
  public static main(): void {
    const product1 = Client.createProduct1();
    console.log("product 1️⃣");
    console.log(product1);
    const product2 = Client.createProduct2(product1);
    console.log("product 1️⃣");
    console.log(product1);
    console.log("product 2️⃣");
    console.log(product2);
    const product3 = product1.clone("Product THREE");
    console.log(product3);
  }

  private static createProduct1() {
    const product = new Product();
    product.name = "Product 1";
    product.primitiveProperty = "Primitive property";
    product.objectProperty = {
      key1: "value 1",
      key2: "value 2",
    };
    product.arrayProperty = ["Array property 1", "Array property 2"];
    return product;
  }

  private static createProduct2(productPrototype: Product) {
    const product2 = productPrototype.clone();
    // * changes on copy do not affect the original
    product2.primitiveProperty = "Primitive property 2";
    product2.arrayProperty[0] = "Array property 1 2";
    product2.arrayProperty.push("Array property 3");
    return product2;
  }
}

// main program
Client.main();
