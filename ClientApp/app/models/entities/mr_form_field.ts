export class mr_form_field {
    constructor() {
        //this.MrFormFieldData =[];
        this.MrFormFieldValueOptions = [];

    }
    public MrFormFieldId: number;
    public mr_template_section_id?: number;
    public DataType?: string;
    public ValueOptions?: string[];
    public FieldType: string;
    public WidgetType?: string;
    public row_order?: number;
    public column_order?: number;
    public default_value?: string;
    public RequiredIndicator?: boolean;
    public date_created?: Date;
    public created_by_user_id?: number;
    public date_last_updated?: Date;
    public last_updated_by_user_id?: number;
    public Label?: string;
    public height?: number;
    public width?: number;
    public font_weight?: string;
    public margin?: string;
    public associate_form_field_id?: number;
    public font_size?: number;
    public Label_height?: number;
    public Label_width?: number;
    public Label_margin?: string;
    public Label_font_size?: number;
    public Label_font_weight?: string;
    public isactive?: boolean;
    public DisplayLabel?: string;

    public validationmsg?: string;
    public minlenth?: number;
    public MrFormFieldData?: any;

    //public MrFormFieldData: ICollection<MrFormFieldData>;
    public MrFormFieldValueOptions?: MrFormFieldValueOptions[];
    //public mr_template_section: mr_template_section;
}

export class MrFormFieldValueOptions {
    public mr_form_field_value_id: number;
    public MrFormFieldId: number;
    public ValueOption: string;
    public order_index: number;
    public is_active: boolean;

    //public virtual mr_form_field mr_form_field { get; set; }
}
