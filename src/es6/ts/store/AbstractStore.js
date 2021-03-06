export default class AbstractStore {
    addChangeListener(callback) {
        Weave.getCallbacks(this).addGroupedCallback(this, callback);
    }
    removeChangeListener(callback) {
        Weave.getCallbacks(this).removeCallback(this, callback);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RzL3N0b3JlL0Fic3RyYWN0U3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFUSxpQkFBaUIsQ0FBQyxRQUFpQjtRQUV6QyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sb0JBQW9CLENBQUMsUUFBaUI7UUFFNUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7QUFDRixDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFN0b3JlXG57XG5cdHB1YmxpYyBhZGRDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjazpGdW5jdGlvbilcblx0e1xuXHRcdFdlYXZlLmdldENhbGxiYWNrcyh0aGlzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgY2FsbGJhY2spO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxiYWNrOkZ1bmN0aW9uKVxuXHR7XG5cdFx0V2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIGNhbGxiYWNrKTtcblx0fVxufSJdfQ==