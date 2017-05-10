describe('Page service', function() {
  var $httpBackend;

  beforeEach(module('pageService'));

  // Mocking the Service
  beforeEach(inject(function(_$httpBackend_){
    var mock_response = {
      pages:[
        {
          id: '1',
          title: 'Page 1',
          link: '/page-1'
        },
        {
          id: '2',
          title: 'Page 2',
          link: '/page-2'
        },
        {
          id: '3',
          title: 'Page 3',
          link: '/page-3'
        }
      ]};

    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('./app/resources/pages.json').respond(mock_response);
  }));

  it('Is defined service', inject(function(pageService) {
    expect(pageService).toBeDefined();
  }));

  it('Returns mocked pages items', inject(function(pageService) {
    var result = pageService.getPages().get();
    $httpBackend.flush();

    var pages = result.pages;

    expect(pages.length).toEqual(3);

    expect(pages[0].id).toEqual('1');
    expect(pages[1].title).toEqual('Page 2');
    expect(pages[2].link).toEqual('/page-3');
  }));

  it('Returns a resource function', inject(function(pageService) {
    var service = pageService;

    expect(service.getPages()).toEqual(jasmine.any(Function));
    expect(service.getPages().get().$promise).toBeDefined();
  }));
});
