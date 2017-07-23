export class mr_form_field {
    constructor() {
       // this.mr_form_field_data = new HashSet<mr_form_field_data>();
        //this.mr_form_field_value_option = new HashSet<mr_form_field_value_option>();
        
    }
    public mr_form_field_id: number;
    public mr_template_section_id?: number;
    public data_type?: string;
    public value_options?: string[];
    public field_type: string;
    public widget_type?: string;
    public row_order?: number;
    public column_order?: number;
    public default_value?: string;
    public required_indicator?: boolean;
    public date_created?: Date;
    public created_by_user_id?: number;
    public date_last_updated?: Date;
    public last_updated_by_user_id?: number;
    public label?: string;
    public height?: number;
    public width?: number;
    public font_weight?: string;
    public margin?: string;
    public associate_form_field_id?: number;
    public font_size?: number;
    public label_height?: number;
    public label_width?: number;
    public label_margin?: string;
    public label_font_size?: number;
    public label_font_weight?: string;
    public isactive?: boolean;
    public display_label?: string;

    public validationmsg?: string;
    public minlenth?: number;
    public mr_form_field_data?: any;

    //public mr_form_field_data: ICollection<mr_form_field_data>;
    //public mr_form_field_value_option: ICollection<mr_form_field_value_option>;
    //public mr_template_section: mr_template_section;
}
