import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerModule, PdfViewerComponent,
  LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  TextSearchService, TextSelectionService, PrintService,
  FormDesignerService, FormFieldsService, AnnotationService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { TextFieldSettings, JavaScriptActionModel } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    FormDesignerService, FormFieldsService, AnnotationService, PageOrganizerService
  ],
  templateUrl: `app.html`
})
export class App {
  @ViewChild('pdfViewer') viewer!: PdfViewerComponent;

  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourcesUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  addDateField(): void {
    const dateField = {
      name: 'DateField1',
      bounds: { X: 146, Y: 200, Width: 200, Height: 24 },
      pageNumber: 1,
      isDateField: true,
      fontSize: 10,
      color: 'black',
      fontFamily: 'Helvetica',
      backgroundColor: '#daeaf7ff',
      borderColor: '#303030',
      alignment: 'Left',
      isReadOnly: false,
      visibility: 'visible',
      isRequired: false,
      isPrint: true,
      tooltip: '',
      thickness: 1,
      actions: {
        format: { script: 'AFDate_FormatEx("m/d/yy")' } as JavaScriptActionModel
      }
    } as TextFieldSettings;

    this.viewer.formDesignerModule.addFormField('Textbox', dateField);
  }

  addTimeField(): void {
    const timeField = {
      name: 'TimeField1',
      bounds: { X: 146, Y: 250, Width: 200, Height: 24 },  // moved so it doesn't overlap Date
      pageNumber: 1,
      isDateField: true,
      fontSize: 10,
      color: 'black',
      fontFamily: 'Helvetica',
      backgroundColor: '#daeaf7ff',
      borderColor: '#303030',
      alignment: 'Left',
      isReadOnly: false,
      visibility: 'visible',
      isRequired: false,
      isPrint: true,
      tooltip: '',
      thickness: 1,
      actions: {
        format: { script: 'AFTime_FormatEx("HH:MM")' } as JavaScriptActionModel
      }
    } as TextFieldSettings;

    this.viewer.formDesignerModule.addFormField('Textbox', timeField);
  }
}