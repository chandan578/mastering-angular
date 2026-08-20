import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Master {

    loggedUser: string = '';
    https = inject(HttpClient);

    getFormattedCardNo(cardNo: string){
        debugger;
        return "**** **** ****"+ " "+ cardNo.substring(12);
    }

    getClients(){
        return this.https.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients");
    }

    saveClient(obj: any){
        return this.https.post('https://api.freeprojectapi.com/api/SmartParking/saveclient', obj);
    }
}
