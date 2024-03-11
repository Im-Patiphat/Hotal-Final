// ----------- CLASS Person --------------
class Person {
  account = null;
  name = "";
  address = "";
  email = "";
  phone = "";
  constructor(name, address, email, phone) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }

  setAccount(account) {
    this.account = account;
  }
  getName() {
    return this.name;
  }
  getAddress() {
    return this.address;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone;
  }
  getAccountType() {
    return this.accountType;
  }
  setAccountType(accountType) {
    this.accountType = accountType;
  }
  toString() {
    return `Person [Name = ${this.name}, Address = ${this.address}, Email = ${this.email}, Phone = ${this.phone}]`;
  }
}
// ----------- CLASS Account --------------
class Account {
  username = "";
  password = "";
  status = "";
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  login(username, password) {
    this.username = username;
    this.password = password;
  }

  resetPassword(username, password) {
    this.username = username;
    this.password = password;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
}
// ----------- CLASS Guest --------------
class Guest extends Person {
  roombookings = [];
  totalRoomBooked = 0;
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  addRoomBooking(roombooking) {
    this.roombookings.push(roombooking);
  }

  createBooking() {}
  toString() {
    return `${super.toString()}, AccountTypr = ${this.accountType}]`;
  }
}

// ----------- CLASS Receptionist --------------
class Receptionist extends Person {
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  createBooking() {}
  toString() {
    return `${super.toString()}, AccountTypr = ${this.accountType}]`;
  }
}
/// ----------- CLASS Hotel --------------
class Hotel {
  rooms = [];
  name = "";
  location = "";

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getRooms() {
    for (let i = 0; i < this.rooms.length; i++) {
       console.log(this.rooms[i].toString());
    }
  }

  addNewRoom(room) {
    this.rooms.push(room);
  }
  toString(){
    return `Hotel : [${this.name} ${this.location} \n ${this.getRooms()}]`
  }
}

// ----------- CLASS Room --------------
class Room {
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = 0;

  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable(){
    if (this.status === RoomStatus.AVAILABLE ) {
      this.status = RoomStatus.AVAILABLE
    }
    return this.status ;
  }
  createRoom(roomNumber, style, status, price){

  }
  toString() {
    return `Room [${this.roomNumber}, ${this.style}, ${this.roomPrice}, ${this.status}]`;
  }
}

// ----------- CLASS RoomBooking --------------
class RoomBooking {
  reservationNumber = "";
  durattionDays = 0;
  constructor(reservationNumber, startDate, durattionDays, status, createdBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durattionDays = durattionDays;
    this.status = status;
    this.createdBy = createdBy;
  }
  getDetail(reservationNumber) {}
  createBooking(reservationNumber, startDate, durattionDays, guest) {}
}

// ----------- Enumeration --------------
class AccountTyper {
  static GUEST = new AccountTyper("guest");
  static RECEOTIONIST = new AccountTyper("receptionist");
  constructor(name) {
    this.name = name;
  }
}

class RoomStatus {
  static AVAILABLE = new RoomStatus("available");
  static DISAVAILABLE = new RoomStatus("disavailable");
  static LATECHECKOUT = new RoomStatus("latecheckout");
  static EARTYCHECKOUT = new RoomStatus("eartycheckout");
  constructor(name){
    this.name = name;
  }
}
const main = () => {
  const guest1 = new Guest(
    "Alice",
    "Alice house",
    "alice@asd.com",
    "0801234567"
  );
  const guest2 = new Guest("Bob", "Bob house", "bob@qwe.com", "0807654321");

  guest1.setAccountType("guest");
  guest2.setAccountType("guest");
  const receptionist1 = new Receptionist(
    "Catherine",
    "Catherine house",
    "catherine@asd.com",
    "0901234567"
  );
  const receptionist2 = new Receptionist(
    "David",
    "David house",
    "david@qwe.com",
    "0907654321"
  );
  receptionist1.setAccountType("receptionist");
  receptionist2.setAccountType("receptionist");

  const hotal = new Hotel("Oat Hotal", "Bang Ta Then")

 
  const room1 = new Room("Room1", "Double Bed Pool", RoomStatus.AVAILABLE, 1000);
  const room2 = new Room("Room2", "Double Bed Sea", RoomStatus.AVAILABLE, 2000);
  const room3 = new Room("Room3", "Twin Bed Pool", RoomStatus.AVAILABLE, 3000);
  const room4 = new Room("Room4", "Twin Bed Sea", RoomStatus.AVAILABLE, 4000);
  


  hotal.addNewRoom(room1);
  hotal.addNewRoom(room2);
  hotal.addNewRoom(room3);
  hotal.addNewRoom(room4);
  
  // console.log(guest1.toString());
  // console.log(guest2.toString());
  // console.log(receptionist1.toString());
  // console.log(receptionist2.toString());

   console.log(hotal.toString());
};
main();
