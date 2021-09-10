import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})

export class DisplaynoteComponent implements OnInit {
  @Input() allNotes: any = [];
  noteGen: any = [];
  updateData: any;
  tokenId = localStorage.getItem("token");
  
  constructor(public note: NoteserviceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    
    this.note.note( this.tokenId).subscribe((userData:any) => {

      this.allNotes=userData['data'].data
      this.allNotes=userData['data'].data.reverse()
      this.allNotes=this.allNotes.filter((noteData:any)=>{
       return noteData.isDeleted === false ;
      });
    })
  }
  openAddDialog(updateData: any) {
   this.updateData = updateData
    this.dialog.open(UpdateComponent, {data : {note: updateData} });
  }

  
}
