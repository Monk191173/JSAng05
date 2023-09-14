import { Component, ElementRef, ViewChild } from '@angular/core';
import { IcurUser } from '../shared/interfaces/faces';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  public curUser: IcurUser = {
    login: '',
    password: '',
    email: ''
  }
  public masUsers: IcurUser[] = [];
  public maxLength: number = 16;
  public nameRegExp = /^[a-zA-Z0-9_]{4,16}$/;
  public loginStyle = ['tool'];
  public maxLengthP: number = 15;
  public passRegExp = /^[a-zA-Z0-9_\-\.]{4,16}$/
  public pasStyle = ['tool'];
  public maxLengthE: number = 55;
  public mailRegExp = /^[\w-\.]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]{2,}$/;
  public mailStyle = ['tool'];
  public addEnabled = true;
  public cursor = 'default';
  public fOutColor = 'rgb(159,198,242)';
  public pOutColor = 'rgb(159,198,242)';
  public eOutColor = 'rgb(159,198,242)';
  public fvalue: string = '';
  public pVal = '';
  public eVal = '';
  public e_mode: boolean = false;
  public userId: number = -1;
  @ViewChild('subBut') subBut!: ElementRef;
  @ViewChild('fInput') fInput!: ElementRef;
  @ViewChild('pInput') pInput!: ElementRef;
  @ViewChild('eInput') eInput!: ElementRef;

  constructor() { }

  ngOnInit(): void { }


  validOk(classMas: Array<string>): boolean {
    return classMas.some(elem => elem == 'toolok')
  }

  checkBut(): void {
    if (this.validOk(this.loginStyle) && this.validOk(this.pasStyle) && this.validOk(this.mailStyle)) {
      this.subBut.nativeElement.style.backgroundColor = 'rgb(77, 162, 252)';
      this.subBut.nativeElement.style.cursor = 'pointer';
      this.addEnabled = false;
    }
    else {
      this.subBut.nativeElement.style.backgroundColor = 'rgb(125, 187, 253)';
      this.addEnabled = true;
      this.subBut.nativeElement.style.cursor = 'default';
    }
  }

  resForm(): void {
    document.forms[0].reset();
    this.loginStyle = ['tool'];
    this.fInput.nativeElement.style.zIndex = '0';
    this.mailStyle = ['tool'];
    this.eInput.nativeElement.style.zIndex = '0';
    this.pasStyle = ['tool'];
    this.pInput.nativeElement.style.zIndex = '0';
    this.addEnabled = true;
    this.subBut.nativeElement.style.cursor = 'default';
    this.subBut.nativeElement.innerText = 'Add user';
    this.e_mode = false;
  }
  /*---------------------------------------------------------------add user */
  addUser(): void {
    let pres: boolean = false;
    this.curUser.login = this.fvalue;
    this.curUser.password = this.pVal;
    this.curUser.email = this.eVal;
    for (let val of this.masUsers)
      if (val.login == this.curUser.login && !this.e_mode) pres = true;
    if (pres) alert('Такий користувач вже існує')
    else {
      let tmpUser: IcurUser = Object.assign({}, this.curUser);
      if (this.e_mode) this.masUsers[this.userId] = tmpUser
      else this.masUsers.push(tmpUser);
      this.resForm();
    }
  }
  /*---------------------------------------------------------------delete user */
  deleteUser(id: number): void {
    this.masUsers.splice(id, 1);
    this.resForm();
  }
  /*---------------------------------------------------------------edit user */
  editUser(id: number): void {
    this.userId = id;
    this.fvalue = this.masUsers[this.userId].login;
    this.pVal = this.masUsers[this.userId].password;
    this.eVal = this.masUsers[this.userId].email;
    this.checkBut();
    this.subBut.nativeElement.innerText = 'Save user';
    this.e_mode = true;
    this.fInput.nativeElement.dispatchEvent(new Event('focus'));
    this.pInput.nativeElement.dispatchEvent(new Event('focus'));
    this.eInput.nativeElement.dispatchEvent(new Event('focus'));
  }

  /*-------------------------------------------------------------------------Login */
  nameFocus(): void {
    this.fOutColor = 'rgb(159,198,242)';
    this.loginStyle = ['tool', 'mestool'];
    if (this.nameRegExp.test(this.fvalue) && this.fvalue != null) {
      console.log(this.fvalue);

      this.fOutColor = 'green';
      this.loginStyle = ['toolok'];
      this.checkBut();
    }
    else {
      this.fOutColor = 'red';
      this.loginStyle = ['toolx', 'mestool'];
      this.checkBut();
    }
  }


  nameInput() {
    if (this.nameRegExp.test(this.fvalue)) {
      this.fOutColor = 'green';
      this.loginStyle = ['toolok'];
      this.checkBut();
    }
    else {
      this.fOutColor = 'red';
      this.loginStyle = ['toolx', 'mestool'];
      this.checkBut();
    }
  }

  /*-------------------------------------------------------------------password */
  pasFocus(): void {
    this.pOutColor = 'rgb(159,198,242)';
    this.pasStyle = ['tool', 'mestool'];
    if (this.passRegExp.test(this.pVal) && this.pVal != null) {
      this.pOutColor = 'green'
      this.pasStyle = ['toolok'];
      this.checkBut();
    }
    else {
      this.pOutColor = 'red';
      this.pasStyle = ['toolx', 'mestool'];
      this.checkBut();
    }
  };


  pasInput(): void {
    if (this.passRegExp.test(this.pVal)) {
      this.pOutColor = 'green'
      this.pasStyle = ['toolok'];
      this.checkBut();
    }
    else {
      this.pOutColor = 'red';
      this.pasStyle = ['toolx', 'mestool'];
      this.checkBut();
    }

  };

  /*-------------------------------------------------------------------email */
  mailFocus(): void {
    this.eOutColor = 'rgb(159,198,242)';
    this.mailStyle = ['tool', 'mestool'];
    if (this.mailRegExp.test(this.eVal)) {
      this.eOutColor = 'green'
      this.mailStyle = ['toolok'];
      this.checkBut();
    }
    else {
      this.eOutColor = 'red';
      this.mailStyle = ['toolx', 'mestool'];
      this.checkBut();
    }
  };


  mailInput(): void {
    if (this.mailRegExp.test(this.eVal)) {
      this.eOutColor = 'green'
      this.mailStyle = ['toolok'];
      this.checkBut();
    }
    else {
      this.eOutColor = 'red';
      this.mailStyle = ['toolx', 'mestool'];
      this.checkBut();
    }

  };

  /*----------------------------------------------------------------sign up---- */
  clickSub(): void {
    if (this.validOk(this.loginStyle) && this.validOk(this.pasStyle) && this.validOk(this.mailStyle))
      this.addUser();
  };
}
