import * as React from "react";
import ChatMessageActionCreators from "../action/ChatMessageActionCreators";
export default class MessageComposer extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (event) => {
            this.setState({ text: event.target.value });
        };
        this.onKeyDown = (event) => {
            if (event.keyCode === weavejs.util.KeyboardUtils.KEYCODES.ENTER) {
                event.preventDefault();
                var text = this.state.text.trim();
                if (text) {
                    ChatMessageActionCreators.createMessage(text, this.props.threadID);
                }
                this.setState({ text: '' });
            }
        };
        this.state = {
            text: ''
        };
    }
    render() {
        return (<textarea className="message-composer" name="message" value={this.state.text} onChange={this.onChange} onKeyDown={this.onKeyDown}/>);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUNvbXBvc2VyLmpzeCIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RzL2NvbXBvbmVudC9NZXNzYWdlQ29tcG9zZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU87T0FDdkIseUJBQXlCLE1BQU0scUNBQXFDO0FBWTNFLDZDQUE2QyxLQUFLLENBQUMsU0FBUztJQUUzRCxZQUFZLEtBQTBCO1FBRXJDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFNTixhQUFRLEdBQUMsQ0FBQyxLQUFxQjtZQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFHLEtBQUssQ0FBQyxNQUE4QixDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFBO1FBRU8sY0FBUyxHQUFDLENBQUMsS0FBeUI7WUFFM0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hFLENBQUM7Z0JBQ0EsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1QsQ0FBQztvQkFDQSx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDRixDQUFDLENBQUE7UUF0QkEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLElBQUksRUFBRSxFQUFFO1NBQ1IsQ0FBQztJQUNILENBQUM7SUFxQkQsTUFBTTtRQUNMLE1BQU0sQ0FBQyxDQUNOLENBQUMsUUFBUSxDQUNSLFNBQVMsQ0FBQyxrQkFBa0IsQ0FDNUIsSUFBSSxDQUFDLFNBQVMsQ0FDZCxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUN2QixRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3hCLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDekIsQ0FDRixDQUFDO0lBQ0gsQ0FBQztBQUNGLENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRNZXNzYWdlQWN0aW9uQ3JlYXRvcnMgZnJvbSBcIi4uL2FjdGlvbi9DaGF0TWVzc2FnZUFjdGlvbkNyZWF0b3JzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUNvbXBvc2VyUHJvcHNcbntcblx0dGhyZWFkSUQ6c3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VDb21wb3NlclN0YXRlXG57XG5cdHRleHQ6c3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQ29tcG9zZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWVzc2FnZUNvbXBvc2VyUHJvcHMsIE1lc3NhZ2VDb21wb3NlclN0YXRlPlxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wczpNZXNzYWdlQ29tcG9zZXJQcm9wcylcblx0e1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGV4dDogJydcblx0XHR9O1xuXHR9XG5cblx0cHJpdmF0ZSBvbkNoYW5nZT0oZXZlbnQ6UmVhY3QuRm9ybUV2ZW50KT0+XG5cdHtcblx0XHR0aGlzLnNldFN0YXRlKHt0ZXh0OiAoZXZlbnQudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlfSk7XG5cdH1cblxuXHRwcml2YXRlIG9uS2V5RG93bj0oZXZlbnQ6UmVhY3QuS2V5Ym9hcmRFdmVudCk9PlxuXHR7XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IHdlYXZlanMudXRpbC5LZXlib2FyZFV0aWxzLktFWUNPREVTLkVOVEVSKVxuXHRcdHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2YXIgdGV4dCA9IHRoaXMuc3RhdGUudGV4dC50cmltKCk7XG5cdFx0XHRpZiAodGV4dClcblx0XHRcdHtcblx0XHRcdFx0Q2hhdE1lc3NhZ2VBY3Rpb25DcmVhdG9ycy5jcmVhdGVNZXNzYWdlKHRleHQsIHRoaXMucHJvcHMudGhyZWFkSUQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGV4dDogJyd9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRjbGFzc05hbWU9XCJtZXNzYWdlLWNvbXBvc2VyXCJcblx0XHRcdFx0bmFtZT1cIm1lc3NhZ2VcIlxuXHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cblx0XHRcdFx0b25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuIl19