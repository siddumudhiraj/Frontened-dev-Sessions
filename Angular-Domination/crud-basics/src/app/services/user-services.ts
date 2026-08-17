import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { datatypes } from "./user-data-types";

@Injectable({
    providedIn: 'root'
})
export class UserServices {
    url = "http://localhost:3000/users";
    constructor(public http: HttpClient) {

    }
    getusers() {
        return this.http.get<datatypes[]>(this.url);
    }
    Addusers(data: datatypes) {
        return this.http.post<datatypes>(this.url, data);
    }
    deleteuser(id: Number| undefined){
        return this.http.delete<datatypes>(`${this.url}/${id}`)
    }

    getuser(id: string) {
        return this.http.get<datatypes>(`${this.url}/${id}`)
    }
    
    updateuser(data: datatypes, id: string) {
        return this.http.put<datatypes>(`${this.url}/${id}`, data);
    }
}
