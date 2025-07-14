import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../service/task.service';
import { Task } from '../../../model/task.model';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from '../../../service/Comments/comment.service';
import { Comment } from '../../../model/Comment/comment.model';
import { AttachmentsService } from '../../../service/Attachments/attachments.service';
import { Attachment } from '../../../model/Attachment/attachment.model';

@Component({
  selector: 'app-view-task',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss',
  providers: [TaskService, CommentService, AttachmentsService],
})
export class ViewTaskComponent implements OnInit {
  taskID: string | null = null;
  displayData: Task | null = null;
  constructor(
    private route: ActivatedRoute,
    private TaskService: TaskService,
    private CommentServices: CommentService,
    private AttachmentServices: AttachmentsService
  ) {}
  DisplayComment: Comment[] = [];
  CommentFields: Comment = {
    comment_description: '',
    comment_attachnment: '',
    task_id: '',
    comment_status: 'ACTIVE',
  };

  DisplayAttachment: Attachment[] = [];
  AttachmentField : Attachment = {
    details_attachment: '',
    details_status: 'ACTIVE',
    task_id: ''
  }

  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id');
    if (this.taskID != null) {
      this.TaskService.findTask(this.taskID).subscribe((data) => {
        this.displayData = data;
      });
      this.displayComment();
      this.displayAttachmentbyTask();
      this.CommentFields.task_id = this.taskID;
      this.AttachmentField.task_id = this.taskID;
    }
  }
  displayComment() {
    if (this.taskID != null) {
      this.CommentServices.displayCommentTask(this.taskID).subscribe((data) => {
        this.DisplayComment = Array.isArray(data) ? data : [data];
      });
    }
  }

  displayAttachmentbyTask(){
    if (this.taskID != null){
      this.AttachmentServices.displayAttachmentByTask(this.taskID).subscribe((data) =>{
        this.DisplayAttachment = Array.isArray(data) ? data : [data];
      });
    }
  }

  SubmitAttachmentForm(){
    this.AttachmentServices.addTaskAttachment(this.AttachmentField).subscribe(() => {
      this.AttachmentField.details_attachment = '';
    });
  }
  addComment() {
    this.CommentServices.addComments(this.CommentFields).subscribe(() => {
      this.displayComment();

      this.CommentFields.comment_description = '';
    });
  }
}
