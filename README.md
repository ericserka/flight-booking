# flight-booking

Flight booking system that demonstrates the application of classic design patterns.

## The Catalog of Design Patterns

Source: https://refactoring.guru/design-patterns/catalog

1. Creational patterns: Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.
    1. Factory Method: Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
    2. Abstract Factory: Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes. 
    3. Builder: Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
    4. Prototype: Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
    5. Singleton: Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

2. Structural patterns: Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.
    1. Adapter: Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
    2. Bridge: Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
    3. Composite: Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.
    4. Decorator: Decorator is a structural pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects, called decorators.
    5. Facade: Facade is a structural design pattern that provides a simplified (but limited) interface to a complex system of classes, library or framework.
    6. Flyweight: Flyweight is a structural design pattern that allows programs to support vast quantities of objects by keeping their memory consumption low.
    7. Proxy: Proxy is a structural design pattern that provides an object that acts as a substitute for a real service object used by a client. A proxy receives client requests, does some work (access control, caching, etc.) and then passes the request to a service object.

3. Behavioral patterns: Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.
    1. Chain of Responsability: Chain of Responsibility is behavioral design pattern that allows passing request along the chain of potential handlers until one of them handles request.
    2. Command: Command is behavioral design pattern that converts requests or simple operations into objects.
    3. Iterator: Iterator is a behavioral design pattern that allows sequential traversal through a complex data structure without exposing its internal details.
    4. Mediator: Mediator is a behavioral design pattern that reduces coupling between components of a program by making them communicate indirectly, through a special mediator object.
    5. Memento: Memento is a behavioral design pattern that allows making snapshots of an object’s state and restoring it in future.
    6. Observer: Observer is a behavioral design pattern that allows some objects to notify other objects about changes in their state.
    7. State: State is a behavioral design pattern that allows an object to change the behavior when its internal state changes.
    8. Strategy: Strategy is a behavioral design pattern that turns a set of behaviors into objects and makes them interchangeable inside original context object.
    9. Template Method: Template Method is a behavioral design pattern that allows you to define a skeleton of an algorithm in a base class and let subclasses override the steps without changing the overall algorithm’s structure.
    10. Visitor: Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
