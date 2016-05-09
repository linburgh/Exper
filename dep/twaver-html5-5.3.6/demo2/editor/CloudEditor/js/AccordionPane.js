editor.AccordionPane = function() {
  this.init();
};

twaver.Util.ext('editor.AccordionPane', Object, {
  init: function() {
    this.view = this.createView();
  },
  initView: function() {
    $("#accordion").accordion({
      heightStyle: "fill"
    });
  },
  refresh: function() {
    $("#accordion").accordion("refresh");
  },
  createView: function() {
    var rootView = $('<div id="accordion-resizer" class="ui-widget-content"></div>');
    this.mainPane = $('<div id="accordion"></div>');
    this.setCategories(categoryJson.categories);
    rootView.append(this.mainPane);
    return rootView[0];
  },
  getView: function() {
    return this.view;
  },
  setCategories: function(categories) {
    this.categories = categories;
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      this.initCategoryTitle(category.title);
      this.initCategoryContent(category.contents);
    }
  },
  initCategoryTitle: function(title) {
    var titleDiv = $('<h3>' + title + '</h3>');
    this.mainPane.append(titleDiv);
  },
  initCategoryContent: function(datas) {
    var contentDiv = $('<ul class="mn-accordion"></ul>');
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      contentDiv.append(this.initItemDiv(data));
    }
    this.mainPane.append(contentDiv);
  },
  initItemDiv: function(data) {
    var icon = data.icon;
    var itemDiv = $('<li class="item-li"></li>');
    var img = $('<img src=' + icon + '></img>');
    img.attr('title', data.tooltip);
    var label = $('<div class="item-label">' + data.label + '</div>');
    itemDiv.append(img);
    itemDiv.append(label);

    this.setDragTarget(img[0], data);
    return itemDiv;
  },
  setDragTarget: function(view, data) {
    view.setAttribute('dragable', true);
    view.ondragstart = function(event) {
      event.dataTransfer.setData("Text", JSON.stringify(data));
    };
  }
});