describe('Band service', function() {
  var $httpBackend;

  beforeEach(module('bandService'));

  // Mocking the Service
  beforeEach(inject(function(_$httpBackend_){
    var mock_response = {
      bands:[
        {
          id: '1',
          title: 'Band 1',
          description: 'Description band 1'
        },
        {
          id: '2',
          title: 'Band 2',
          description: 'Description band 2'
        },
        {
          id: '3',
          title: 'Band 3',
          description: 'Description band 3'
        }
      ]};

    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('./app/resources/bands.json').respond(mock_response);
  }));

  it('Is defined service', inject(function(bandService) {
    expect(bandService).toBeDefined();
  }));

  it('Returns mocked bands items', inject(function(bandService) {
    var result = bandService.getBands().get();
    $httpBackend.flush();

    var bands = result.bands;

    expect(bands.length).toEqual(3);

    expect(bands[0].id).toEqual('1');
    expect(bands[1].title).toEqual('Band 2');
    expect(bands[2].description).toEqual('Description band 3');
  }));

  it('Returns a resource function', inject(function(bandService) {
    var service = bandService;

    expect(service.getBands()).toEqual(jasmine.any(Function));
    expect(service.getBands().get().$promise).toBeDefined();
  }));
});
