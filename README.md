# Syncfusion Angular PDF Viewer - DateTime Picker Field Sample

Angular sample demonstrating the **DateTime Picker form field** in the Syncfusion EJ2 Angular PDF Viewer through the Form Designer UI and the `addFormField` API.

---

## Features

- **Form Designer toolbar** - New DateTime Picker tool to place a field on a page.
- **Manual or picker input** - Type a value or select it from the calendar or clock dropdown.
- **Strict format validation** - Invalid input is rejected and a validation popup is displayed.
- **Distinct Form Designer appearance** - Placed fields render with a background, border, and field-type indicator.
- **Date ↔ Time switching** - Toggle the field between Date Picker and Time Picker from the Format tab.
- **Live format preview** - Modify the format string and preview the output before adding the field.
- **Programmatic API support** - Use `formDesignerModule.addFormField('Textbox', settings)` for full control.

---

## Setup

```powershell
npm install @syncfusion/ej2-angular-pdfviewer --save
npm start
```

---

## UI Workflow

### 1. Form Designer Toolbar - DateTime Picker Tool

Selecting the DateTime Picker tool switches the cursor to placement mode. Clicking on a PDF page places a DateTime Picker field.

---

### 2. Manual Entry and Dropdown Picker

The field accepts values either by direct typing or through the integrated picker UI.

#### Date Field

- Enter a date manually.
- Open the calendar dropdown to select a date.

#### Time Field

- Enter a time manually.
- Open the clock dropdown to select a time.

---

### 3. Strict Format Validation

Invalid values are rejected and a validation popup is displayed. The invalid value is not applied to the field.

**Example:**

For the format `m/d/yy`:

- `10/19/2026` - Accepted
- `19/10/26` - Rejected
- `not-a-date` - Rejected

---

### 4. Format Tab - Date/Time Toggle and Format Editing

The **Format** tab in the Properties panel allows you to:

- Switch between **Date Picker** and **Time Picker** modes.
- Edit the display format string.
- Preview formatting changes before saving.

#### Common Formats

| Format String | Example Output |
|--------------|---------------|
| `m/d/yy` | `10/19/26` |
| `mm/dd/yyyy` | `10/19/2026` |
| `HH:MM` | `14:30` |
| `HH:MM:ss` | `14:30:45` |

---

## Form Designer Appearance

Placed DateTime Picker fields have a distinct visual appearance in Form Designer mode, including:

- Colored background
- Visible border
- Field-type indicator

---

## Programmatic Usage

The same field can be added dynamically through the `formDesignerModule.addFormField('Textbox', settings)` API.

### Add Date Field

```typescript
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
```

### Add Time Field

```typescript
addTimeField(): void {
  const timeField = {
    name: 'TimeField1',
    bounds: { X: 146, Y: 250, Width: 200, Height: 24 },
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
```
